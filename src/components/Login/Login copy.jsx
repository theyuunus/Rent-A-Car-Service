import React from 'react'
import "./Login.scss"
import Helmet from "../Helmet/Helmet"
import CarSlider from "../UI/LoginSlider"
import img1 from "../../../public/images/1.png"
import img2 from "../../../public/images/2.png"

export default function Login() {
    const carImages = [
        '1.png',
        '2.png',
        // Qo'shimcha rasmlarni qo'shing
    ];
    return (
        <React.Fragment>
            <Helmet title="Login">
                <div className="login">
                    <div className='login-back-img'>
                        <div className='Login-main-div'>
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



                            </div>
                            <div>
                                <h1>Moshina Rasmlari Slider</h1>
                                <CarSlider images={carImages} />
                            </div>
                        </div>

                    </div>
                </div>
            </Helmet>
        </React.Fragment>
    )
}
