import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const CarItem = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="cars">
        {cars.slice(0, 2).map((car, index) => (
          <Col key={index} lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
              <div className="car__img">
                <img src={car.image} alt="" className="w-100" />
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
                  <button className="w-50 car__item-btn car__btn-rent">
                    Rent
                  </button>
                </Link>

                <Link to={`/cars/${car.carName}`}>
                  <button className="w-50 car__item-btn car__btn-details">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default CarItem;