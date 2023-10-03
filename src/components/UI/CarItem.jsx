import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const CarItem = () => {
  const [cars, setCars] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const carsPerPage = 6; // Number of cars to display per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleShowMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ul className="cars">
        {cars
          .slice(0, currentPage * carsPerPage)
          .map((car, index) => (
            <li key={index}>
              <div className="car">
                <Col lg="4" md="4" sm="6" className="mb-5">
                  <div className="car__item" key={car.id}>
                    <div className="car__img">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/" + car.image}
                        alt="error"
                      />
                    </div>

                    <div className="car__item-content mt-4">
                      <h4 className="section__title text-center" key={car.id}>
                        {car.carName}
                      </h4>
                      <h6 className="rent__price text-center mt-" key={car.id}>
                        {car.price}.00 <span>/ Day</span>
                      </h6>

                      <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1" key={car.id}>
                          <i className="ri-car-line"></i> {car.model}
                        </span>
                        <span className=" d-flex align-items-center gap-1" key={car.id}>
                          <i className="ri-settings-2-line"></i> {car.automatic}
                        </span>
                        <span className=" d-flex align-items-center gap-1" key={car.id}>
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
              </div>
            </li>
          ))}
      </ul>
      {!showMore && cars.length > currentPage * carsPerPage && (
        <button className="BottomButton" onClick={toggleShowMore}>See More</button>
      )}
    </div>
  );
};

export default CarItem;
