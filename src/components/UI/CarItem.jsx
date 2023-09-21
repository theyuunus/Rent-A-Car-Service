import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const CarItem = (props) => {
  // const { imgUrl, model, carName, automatic, speed, price } = props.item;

  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8888/cars`)
      .then(res => setCars(res.data))
      .catch(err => console.error(err))
}, [])

return (
  <React.Component>
    <div className="cars">
      {cars.slice(0, 2).map(cars => {
        return(
          <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={cars.image} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{cars.carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${cars.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {cars.model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {cars.automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {cars.speed}
            </span>
          </div>

          {/* <Link to={/cars/${cars.carName}}>
            <button className=" w-50 car__item-btn car__btn-rent">
              Rent
            </button>
          </Link>

          <Link to={/cars/${cars.carName}}>
            <button className=" w-50 car__item-btn car__btn-details">
              Details
            </button>
          </Link> */}
        </div>
      </div>
    </Col>
        )
      })}
    </div>
  </React.Component>
);
};

export default CarItem;