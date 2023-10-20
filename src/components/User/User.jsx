import React, { useEffect, useState } from "react";
import "./User.scss"
import axios from 'axios';
import CarDetails from "../../pages/CarDetails";

export default function User({ user }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userCarHistory, setUserCarHistory] = useState([]);

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchOtherUserData = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        const data = response.data;
        setUserData(data);
        setUserCarHistory(data.userCarHistory || []);
      } catch (error) {
        console.error('Xato', error);
      }
    };

    if (user) {
      fetchOtherUserData(user.id);
    }
  }, [user]);

  const showCarDetails = (carName, brand) => {
    setSelectedCar({ carName, brand });
  };

  return (
    <div className="user-container">
      <div>
        <h2>Xush kelibsiz, {user ? user.name : 'Geust'}!</h2>
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Passwor: {userData.password}</p>
        </div>
        <div>
          <h3>Mashina Tarixi:</h3>
          <ul>
            {userCarHistory.map((car, index) => (
              <li key={index}>
                Mashina nomi: {car.carName}, Marka: {car.brand}
                <button onClick={() => showCarDetails(car.carName, car.brand)}>Tafsilotlarni ko'rsatish</button>
                <CarDetails user={user} onReserve={showCarDetails} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
