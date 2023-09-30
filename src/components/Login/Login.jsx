import React from 'react'
import "./Login.scss"
import Helmet from "../Helmet/Helmet"
import CarSlider from "../UI/LoginSlider"

export default function Login() {
    const carImages = [
        '../../images/1.png',
        '../../images/2.png',
        '../../images/3.png',
        '../../images/4.png',
        '../../images/5.png',
        // Qo'shimcha rasmlar
    ];
    return (
        <React.Fragment>
            <Helmet title="Login">
                <div className="login">
                    <div className='login-back-img'>
                        <div className="login-div">
                            <div className='login-section-div'>
                                <h1>
                                    Login In
                                </h1>
                                <div className="login-section-div-inputs">
                                    <input placeholder='Name' type="text" />
                                    <br />
                                    <input placeholder='Password' type="password" />
                                </div>
                                <div className="login-section-div-btn">
                                    <button>Enter</button>
                                </div>
                            </div>
                            <CarSlider images={carImages} />
                        </div>
                    </div>
                </div>
            </Helmet>
        </React.Fragment>
    )
}
