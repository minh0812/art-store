import React from "react";
import "./about.scss";
import { Col, Row } from "antd";

const About = () => {
  return (
    <Row className="about">
      <Col xs={24} sm={24} md={24} lg={12} xl={12} className="about__image">
        <img
          src="https://www.artphilosophy.com/wp-content/uploads/2019/12/Ameena-art-tubes.jpg"
          alt="about"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} className="about__content">
        <h1>ABOUT US</h1>
        <p>
          Art Philosophy is a family-owned business based in the United States.
          We are a team of artists, crafters, and designers who love to create
          and share our passion with you. We believe that everyone is an artist
          in their own way, and we want to inspire you to create beautiful
          things. Our goal is to provide high-quality products at affordable
          prices so that anyone can enjoy making art!
        </p>
        <p>
          Our mission is to provide you with the best products and service
          possible. We want to make sure that you are happy with your purchase,
          so we offer a 100% satisfaction guarantee on all of our products. If
          for any reason you are not satisfied with your purchase, please
          contact us and we will do everything we can to make it right!
        </p>
        <p>
          We hope that you will join us in our mission to inspire creativity and
          share the joy of art!
        </p>
        <p>Thank you for visiting our website!</p>
        <p>Sincerely,</p>
        <p>The Art Philosophy Team</p>
      </Col>
    </Row>
  );
};

export default About;
