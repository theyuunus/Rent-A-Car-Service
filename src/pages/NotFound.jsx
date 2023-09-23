import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";
import backgroundImage from "../images/404.png"
import { Link } from "react-router-dom";

const NotFound = () => {
  const bodyStyle = {
    height: '70vh',
    background: '#000d6b',
    paddingTop: '90px', 
    paddingBottom: '60vh',
    paddingLeft: '45vh'
  };
  const backgroundImageStyle = {
    width: '900px',
    height: '350px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const h1style = {
    fontSize: '48px',
    fontWeight: '600',
    // textAlign: 'center',
    color: '#ffff',
    paddingTop: '50px'
  }
  const pStyle = {
    color: 'rgba(60, 60, 67, 10)',
    paddingTop: '10px'
    // textAlign: 'center',
  }
  const headerStyle = {
    textAlign: 'center',
  }
  const buttonStyle = {
    width: '150px',
    height: '56px',
    border: 'none',
    borderRadius: '5px',
    color: '#ffff',
    background: `transparent`,
    // filter: 'blur(1px)'
  filter: 'opacity(var(--value, 100%))'
  }

  return (
    <React.Fragment>
      <Helmet title="Not Found">
        <div style={bodyStyle}>
          <Container>
            <div style={backgroundImageStyle}>
              <div style={headerStyle}>
                <h1 style={h1style}>Page Not Found</h1>
                <p style={pStyle}>Duis dolor sit amet, consectetur adipiscing <br /> elitvestibulum in pharetra. </p>
                <Link to={"/"}><button style={buttonStyle}><span>Back to homepage</span></button></Link>
              </div>
            </div>
          </Container>
        </div>
      </Helmet>
    </React.Fragment>
  );
};

export default NotFound;
