import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const CarItem = (props) => {
  const [initialCars, setInitialCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [jsonSoldOut, setJsonSoldOut] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/cars?_page=${currentPage}&_limit=6`)
      .then((response) => {
        if (response.data.length === 0) {
          setJsonSoldOut(true);
          setShowMore(false);
        } else {
          const updatedCars = [...initialCars, ...response.data];
          setCars(updatedCars);
          setInitialCars(updatedCars);
          setCurrentPage(currentPage + 1);
        }
        setLoading(false);
      })
      .catch((error) => console.error("Ma'lumotlar olinmadi: ", error));
  };

  const handleSeeMore = () => {
    loadCars();
  };

  const handleSell = () => {
    setCars(initialCars.slice(0, 6));
    setShowMore(true);
    setCurrentPage(2);
  };

  if (!cars.length && loading) {
    return <div>Loading...</div>;
  }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="cars">
        {cars.map((car) => (
          <div className="car__item" key={car.id}>
            <div className="car__img">
              <img
                className="w-100"
                src={process.env.PUBLIC_URL + "/images/" + car.image}
                alt="error"
              />
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
      {!jsonSoldOut && showMore && (
        <button
          className="w-100 car__item-btn car__btn-see-more"
          onClick={handleSeeMore}
        >
          {loading ? "Loading..." : "See More"}
        </button>
      )}
      {jsonSoldOut && (
        <button
          className="w-100 car__item-btn car__btn-sell"
          onClick={handleSell}
        >
          Less
        </button>
      )}
    </Col>
  );
};

export default CarItem;
