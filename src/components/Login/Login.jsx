import React, { useState } from 'react';
import './Login.scss';
import Helmet from '../Helmet/Helmet';
import CarSlider from '../UI/LoginSlider';
import img01 from '../../images/lambo 1.png';
import img02 from '../../images/Rolls Royce 1.png';
import img03 from '../../images/audi 1.png';
import img04 from '../../images/mers 1.png';
import img05 from '../../images/McLaren 1.png';
import axios from 'axios';

export default function Login({ handleLogin }) {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [currentUser, setCurrentUser] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8888/user')
            .then((response) => response.data)
            .then((data) => {
                const user = data.find((item) => item.name === formData.name && item.password === formData.password);
                if (user) {
                    performLogin(user);
                } else {
                    alert('Login xato: Foydalanuvchi topilmadi');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const performLogin = (user) => {
        setCurrentUser(user);
        handleLogin(user); 
    };

    const carImages = [img01, img02, img03, img04, img05];

    return (
        <React.Fragment>
            <Helmet title="Login" />
            <div className="login">
                <div className="login-back-img">
                    <div className="login-div">
                        <div className="login-section-div">
                            {currentUser ? (
                                <div>
                                    <h2>Tizimga xush kelibsiz, {currentUser.name}!</h2>
                                    <button onClick={() => setCurrentUser(null)}>Chiqish</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h1>Login In</h1>
                                    <div className="login-section-div-inputs">
                                        <input placeholder="Name" type="text" name="name" onChange={handleChange} />
                                        <br />
                                        <input placeholder="Password" type="password" name="password" onChange={handleChange} />
                                    </div>
                                    <div className="login-section-div-btn">
                                        <button type="submit">Enter</button>
                                    </div>
                                </form>
                            )}
                        </div>
                        <CarSlider images={carImages} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
