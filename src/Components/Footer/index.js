import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iconFB from '../../Assets/Img/icon_facebook.png';
import iconIG from '../../Assets/Img/icon_instagram.png';
import iconTWT from '../../Assets/Img/icon_twitter.png';
import iconMail from '../../Assets/Img/icon_mail.png';
import iconTWH from '../../Assets/Img/icon_twitch.png';
import iconBinar from '../../Assets/Img/Rectangle 74.png';

const Footer = () => {
  return (
    <Container className="px-0 mt-5">
      <Row>
        <Col xs sm="8" md lg="3">
          <div className="d-flex flex-column">
            <p><small>Suroyo No. 161 Mayang Kota Probolinggo 672000</small></p>
            <p><small>binarcarrental@gmail.com</small></p>
            <p><small>081-233-334-808</small></p>
          </div>
        </Col>
        <Col xs sm="4" md lg="2">
          <div className="d-flex flex-column justify-content-start">
            <p><small><b>Our service</b></small></p>
            <p><small><b>Why us</b></small></p>
            <p><small><b>Testimonial</b></small></p>
            <p><small><b>FAQ</b></small></p>
          </div>
        </Col>
        <Col xs sm="8" md lg="4">
          <div className="d-flex flex-column gap-2">
            <p><small>Connect with us</small></p>
            <div className="d-flex gap-3">
              <img src={iconFB} alt="Facebook" />
              <img src={iconIG} alt="Instagram" />
              <img src={iconTWT} alt="Twitter" />
              <img src={iconMail} alt="E-mail" />
              <img src={iconTWH} alt="Twitch" />
            </div>
          </div>
        </Col>
        <Col xs sm="4" md lg="3">
          <div className="d-flex flex-column gap-2">
            <p><small>Copyright Binar 2022</small></p>
            <img className="w-50" src={iconBinar} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer