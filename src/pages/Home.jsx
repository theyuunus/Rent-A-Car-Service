import React, { useState, useEffect } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.error("Ma'lumotlar olinmadi: ", error));
  }, []);


  if (!cars) {
    return <div>Loading...</div>;
  }
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            <div className="cars">
              {cars.slice(4, 7).map((car) => (
                <div className="car__item" key={car.id}>
                  <div className="car__img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/" + car.image} alt="error" />
                  </div>

                  <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{car.carName}</h4>
                    <h6 className="rent__price text-center mt-">
                      ${car.price}.00 <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                      <span className=" d-flex align-items-center gap-1">
                        <i className="ri-car-line"></i> {car.model}
                      </span>
                      <span className=" d-flex align-items-center gap-1">
                        <i className="ri-settings-2-line"></i> {car.automatic}
                      </span>
                      <span className=" d-flex align-items-center gap-1">
                        <i className="ri-timer-flash-line"></i> {car.speed}
                      </span>
                    </div>
                    <Link to={`/cars/${car.carName}`}>
                      <button className=" w-50 car__item-btn car__btn-rent">
                        Rent
                      </button>
                    </Link>

                    <Link to={`/cars/${car.carName}`}>
                      <button className=" w-50 car__item-btn car__btn-details">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
