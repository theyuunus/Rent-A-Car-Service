import React, { useState, useEffect } from 'react';
import './Login.scss';
import Helmet from '../Helmet/Helmet';
import CarSlider from '../UI/LoginSlider';
import axios from 'axios';
import img01 from '../../images/McLaren 1.png';
import img02 from '../../images/Rolls Royce 1.png';
import img03 from '../../images/audi 1.png';
import img04 from '../../images/lambo 1.png';
import img05 from '../../images/mers 1.png';
import { Link } from 'react-router-dom';

export default function Login({ handleLogin }) {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [rentedCars, setRentedCars] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            setCurrentUser(storedUser);
            setIsLoggedIn(true);
            fetchUserData(storedUser);
        }
    }, []);

    useEffect(() => {
        if (currentUser) {
            fetchUserData(currentUser);
        } else {
            setUserData(null);
        }
    }, [currentUser]);

    const fetchUserData = async (user) => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${user.id}`);
            const data = response.data;
            if (data.isSpecialUser) {
                console.log('User is special!');
            }
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/user');
            const data = response.data;
            const user = data.find((item) => item.name === formData.name && item.password === formData.password);

            if (user) {
                performLogin(user);
            } else {
                alert('Login xato: Foydalanuvchi topilmadi');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const performLogin = (user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        fetchUserData(user);
    };

    const carImages = [img01, img02, img03, img04, img05];

    const handleLogout = () => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('currentUser');
        setRentedCars([]);
    };

    const handleHomeButtonClick = () => {
        window.location.reload();
    };

    return (
        <React.Fragment>
            <Helmet title="Login" />
            <div className="login">
                <div className="login-back-img">
                    <div className="login-div">
                        <div className="login-section-div">
                            {isLoggedIn ? (
                                <div onClick={handleHomeButtonClick} className="login-current">
                                    <h2>Tizimga xush kelibsiz, {currentUser.name}!</h2>
                                    {currentUser.isSpecialUser ? (
                                        <h4>Sizda Maxsus Fayllar Bor</h4>
                                    ) : (
                                        <h4>Sizda User Cabinet Bor</h4>
                                    )}
                                    <Link to={"/"}><button>Home</button></Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h1>Login In</h1>
                                    <div className="login-section-div-inputs">
                                        <input
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="login-section-div-btn">
                                        <button type="submit">Enter</button>
                                    </div>
                                </form>
                            )}
                        </div>
                        <CarSlider images={carImages.map((image, index) => ({ id: index, src: image }))} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
