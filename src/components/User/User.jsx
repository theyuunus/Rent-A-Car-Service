import React, { useEffect, useState } from 'react';
import './User.scss';
import axios from 'axios';

export default function User({ user }) {
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [selectedCar, setSelectedCar] = useState(null);
  const [userObject, setUserObject] = useState({});

  useEffect(() => {
    const fetchOtherUserData = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        setUserObject(response.data); 
      } catch (error) {
        console.error('Xato', error);
      }
    };

    if (user) {
      fetchOtherUserData(user.id);
    } else {
      setUserObject(JSON.parse(localStorage.getItem("currentUser")));
    }
  }, [user]);

  const showCarDetails = (carName, brand) => {
    setSelectedCar({ carName, brand });
  };

  return (
    <div className="user-container">
      <div>
        <h2>Xush kelibsiz, {user ? user.name : 'Guest'}!</h2>
        <div>
          <p>Name: {userObject.name}</p>
          <p>Email: {userObject.email}</p>
          <p>Password: {userObject.password}</p>
        </div>
        <div>
          <h3>Mashina Tarixi:</h3>
        </div>
      </div>
    </div>
  );
}
