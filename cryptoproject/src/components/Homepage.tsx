import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <div className="yazi">
      <Title level={2} className="heading">
        Global Kripto İstatistikleri
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Toplam Kripto Para" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Toplam Değişim" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Toplam Market Limiti" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="24 Saatte Yapılan Toplam İşlemler" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Toplam Marketler" value="5" />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
