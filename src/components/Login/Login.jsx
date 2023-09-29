import React from 'react'
import "./Login.scss"
import Helmet from "../Helmet/Helmet"

export default function Login() {
    return (
        <React.Fragment>
            <Helmet title="Login">
                <div className="login">
                    <div className='login-back-img'>
                        <div className='login-section-div'>
                            <h1>
                                Login In
                            </h1>
                            <div className="login-section-div-inputs">
                                <input type="text" />
                                <br />
                                <input type="password" />
                            </div>
                            <div className="login-section-div-btn">
                                <button>Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </React.Fragment>
    )
}
