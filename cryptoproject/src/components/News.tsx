import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

interface NewsItem {
  url: string;
  name: string;
  provider: NewsProvider[];
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  datePublished: string;
}

interface NewsProvider {
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
}

interface NewsProps {
  simplified: boolean;
}

const News: React.FC<NewsProps> = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState<string>("CryptoCurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <div>Loading...</div>;

  return (
    <div className="yazi">
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Crypto Seçiniz"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="CryptoCurrency">CryptoCurrency</Option>
              {data?.data?.coins?.map((coin: NewsItem) => (
                <Option key={coin.name} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news: NewsItem, index: number) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                  />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
