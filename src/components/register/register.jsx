import React, { useState } from 'react';
import './register.scss';
import Helmet from '../Helmet/Helmet';
import CarSlider from '../UI/LoginSlider';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img01 from '../../images/lambo 1.png';
import img02 from '../../images/Rolls Royce 1.png';
import img03 from '../../images/audi 1.png';
import img04 from '../../images/mers 1.png';
import img05 from '../../images/McLaren 1.png';

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({ name: '', password: '', email: '' });
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/user', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        alert('Foydalanuvchi Qoshildi !');
        handleRegister(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const carImages = [img01, img02, img03, img04, img05];

  return (
    <React.Fragment>
      <Helmet title="Register">
        <div className="Register">
          <div className="Register-back-img">
            <div className="Register-div">
              <CarSlider images={carImages.map((image, index) => ({ id: index, src: image }))} />
              <div className="Register-section-div">
                {currentUser ? (
                  <div className='login-current'>
                    <h2>Tizimga xush kelibsiz, {currentUser.name}!</h2>
                    <Link to={"/"}><button onClick={() => setCurrentUser(null)}>Chiqish</button></Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h1>Sing Up</h1>
                    <div className="Register-section-div-inputs">
                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="Register-section-div-btn">
                      <button type="submit" >Enter</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </React.Fragment>
  );
}
