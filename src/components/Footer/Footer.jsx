import React, { useState } from 'react';
import axios from 'axios';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/",
    display: "Home"
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blog",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];




const Footer = () => {

  const [email, setEmail] = useState("");

  const botToken = "6366544376:AAEcTyLYoyK6yp_GxZ3SvcKqdEvP3kdPvSQ";

  const SendTelegramBot = async () => {
    try {
      const text = `
      Email: ${email}
      `;

      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: "-1001629291022",
          text: text,
        }
      );

      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setEmail("")
  };
  const isEmailEmpty = email === "";
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">39 Atoiy, Toshkent, Uzbekistan</p>
              <p className="office__info">Phone: +998 (90) 996-98-87</p>

              <p className="office__info">Email: obidxojayevbotir@gmail.com</p>

              <p className="office__info">Office Time: 8am - 10pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span >
                <i onClick={SendTelegramBot} className={`ri-send-plane-line ${isEmailEmpty ? 'disabled' : ''}`}></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;