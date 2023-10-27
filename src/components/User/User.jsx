import React, { useEffect, useState } from 'react';
import './User.scss';
import axios from 'axios';
import { Container } from 'reactstrap';

export default function User({ user }) {
  const [userObject, setUserObject] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        setUserObject(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (user) {
      fetchUserData(user.id);
    } else {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        setUserObject(JSON.parse(currentUser));
      }
    }

    const selectedCarData = JSON.parse(localStorage.getItem("selectedCar"));
    setSelectedCar(selectedCarData);
  }, [user]);

  return (
    <div className="user-container">
      <div>
        <h2>Xush kelibsiz, {userObject ? userObject.name : 'Guest'}!</h2>
        <div>
          <h2>Name: {userObject ? userObject.name : 'N/A'}</h2>
          <h2>Email: {userObject ? userObject.email : 'N/A'}</h2>
          <h2>Password: {userObject ? userObject.password : 'N/A'}</h2>
        </div>
      </div>

      <div>
        {selectedCar ? (
          <div>
            <h1>Car History:</h1>
            <Container>
              <h3>Car Name: {selectedCar.carName}</h3>
              <h3>Brand: {selectedCar.brand}</h3>
            </Container>
          </div>
        ) : (
          <p>No car selected</p>
        )}
      </div>
    </div>
  );
}
