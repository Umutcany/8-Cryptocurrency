import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

interface Props {
  simplified: boolean;
}

const Cryptocurrencies: React.FC<Props> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  if (isFetching) return "Loading...";

  console.log(cryptos);

  return (
    <div className="yazi">
      <Row gutter={[32, 32]} className="crypto-card-container  ">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card "
            key={currency.id}
          >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                title={`${currency.rank}.${currency.name}`}
                hoverable
              >
                <p>Fiyat:{millify(currency.price)}</p>
                <p>Piyasa Değeri: {millify(currency.marketCap)}</p>
                <p>Günlük Değişimler: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
