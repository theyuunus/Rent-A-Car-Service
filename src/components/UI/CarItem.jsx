import React, { useState, useEffect } from "react";
import { Col, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const CarItem = () => {
  const [initialCars, setInitialCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreItems, setNoMoreItems] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [noCarsFound, setNoCarsFound] = useState(false);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/cars?_page=${currentPage}&_limit=6`)
      .then((response) => {
        if (response.data.length === 0) {
          setNoMoreItems(true);
          setShowMore(false);
        } else {
          const updatedCars = [...initialCars, ...response.data];
          setCars(updatedCars);
          setInitialCars(updatedCars);
          setCurrentPage(currentPage + 1);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterCarsByName = (input) => {
    const filteredCars = initialCars.filter((car) =>
      car.brand.toLowerCase().includes(input.toLowerCase())
    );

    if (filteredCars.length === 0) {
      setNoCarsFound(true);
      setShowMore(false);
    } else {
      setNoCarsFound(false);
      setShowMore(true);
    }

    setCars(filteredCars);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    filterCarsByName(inputValue);
  };

  const handleSeeMore = () => {
    loadCars();
  };

  if (loading && cars.length === 0) {
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car-search-input">
        <Input
          type="text"
          placeholder="Search your Car Brand"
          onChange={handleSearchInputChange}
          value={searchInput}
        />
      </div>
      {noCarsFound ? (
        <div className="car_filter_not_found">The car you wanted was not found</div>
      ) : (
        <div className="cars">
          {cars.map((car, i) => {
            i += 1;
            return (

              <div className="car__item" key={car.id}>
                <div className="car__img">
                  <img
                    className="w-100"
                    src={car.image.startsWith(i) ? process.env.PUBLIC_URL + "/images/" + car.image : car.image}
                    alt="error"
                  />
                </div>
                <div className="car__item-content mt-4">
                  <h4 className="section__title text-center">{car.carName}</h4>
                  <h6 className="rent__price text-center mt-">
                    ${car.price}.00 <span>/ Day</span>
                  </h6>
                  <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                    <span className="d-flex align-items-center gap-1">
                      <i className="ri-car-line"></i> {car.model}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <i className="ri-settings-2-line"></i> {car.automatic}
                    </span>
                    <span className="d-flex align-items-center gap-1">
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
            )
          })}
        </div>
      )}
      {showMore && (
        <div className="btn_see_more_div">
          <button
            className="btn_see_more"
            onClick={handleSeeMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "See More"}
          </button>
        </div>
      )}
    </Col>
  );
};

export default CarItem;
