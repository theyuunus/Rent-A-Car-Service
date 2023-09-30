import React from 'react'
import "./Login.scss"
import Helmet from "../Helmet/Helmet"
import CarSlider from "../UI/LoginSlider"
import img01 from "../../images/lambo 1.png"
import img02 from "../../images/Rolls Royce 1.png"
import img03 from "../../images/audi 1.png"
import img04 from "../../images/mers 1.png"
import img05 from "../../images/McLaren 1.png"

export default function Login() {
    const carImages = [
        img01,
        img02,
        img03,
        img04,
        img05,
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
