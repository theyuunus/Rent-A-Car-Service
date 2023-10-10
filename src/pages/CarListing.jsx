import React from "react";
import { Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { Link } from "react-router-dom";
// import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      {/* <section> */}
        {/* <Container> */}
          {/* <Row> */}
            <Col lg="12" id="12">
              <div id="sort" className=" d-flex align-items-center gap-3 mb-5">
                <span className="SortBy d-flex align-items-center">
                  <Link to={"#12"}><i className="ri-sort-asc"></i></Link>
                </span>

                {/* <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select> */}
              </div>
            </Col>

            <CarItem />
          {/* </Row> */}
        {/* </Container> */}
      {/* </section> */}
    </Helmet>
  );
};

export default CarListing;
