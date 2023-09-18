import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <div className="yazi">
      <Title level={2} className="heading">
        Global Kripto İstatistikleri
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Toplam Kripto Para"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Toplam Değişim"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Piyasa Değeri"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="24 Saatte Yapılan Toplam İşlemler"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Toplam Marketler"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Dünyadaki en popüler 10 kripto para
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies/">Daha Fazla Göster</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Güncel Kripto Para Haberleri
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Daha Fazla Göster</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
