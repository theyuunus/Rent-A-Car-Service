import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import masterCard from "../assets/all-images/master-card.jpg";
import paypal from "../assets/all-images/paypal.jpg";
import "../styles/payment-method.css";
import axios from 'axios';

const CarDetails = ({ user, onReserve }) => {
  const { slug } = useParams();
  const [singleCarItem, setSingleCarItem] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cars?carName=${slug}`);
        const data = response.data;

        if (data && data.length > 0) {
          setSingleCarItem(data[0]);
        } else {
          setSingleCarItem(null);
        }
      } catch (error) {
        console.error("Ma'lumotlar olinmadi:", error);
      }
    };

    fetchCarDetails();
  }, [slug]);

  if (!singleCarItem) {
    return <div>Ma'lumotlar topilmadi</div>;
  }

  const reserveCar = async () => {
    const carName = singleCarItem.carName;
    const brand = singleCarItem.brand;

    try {
      await axios.post('http://localhost:8080/bougth', { carName, brand, userId: user.id });
      onReserve(carName, brand); 
    } catch (error) {
      console.error('Reserve error:', error);
    }
  };

  return (
    <div>
      <Helmet title={singleCarItem.carName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img
                className="w-100"
                src={singleCarItem.image.startsWith(singleCarItem.id)
                  ? process.env.PUBLIC_URL + "/images/" + singleCarItem.image
                  : singleCarItem.image}
                alt="error"
              />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}.00 / Day
                  </h6>

                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {singleCarItem.model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {singleCarItem.automatic}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {singleCarItem.speed}
                  </span>
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {singleCarItem.gps}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {singleCarItem.seatType}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <div className="payment">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Direct Bank Transfer
                  </label>
                </div>

                <div className="payment mt-3">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Cheque Payment
                  </label>
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Master Card
                  </label>
                  <img src={masterCard} alt="" />
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Paypal
                  </label>
                  <img src={paypal} alt="" />
                </div>
                <div className="payment text-end mt-5">
                  <button onClick={reserveCar}>Reserve Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CarDetails;
