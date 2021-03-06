import React from "react";
import logo from "../images/LogoMakr_8vj7Vz.png"
import './Header.css'

class Header extends React.Component {
    render() {
        const date = new Date().toDateString();

        return (
            <div className="row">
                <div className="appRow mx-auto col-12 col-lg-9 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="logo-align">
                            <img className="card-title logo-size" src={logo} alt="Logo" />
                            </div>
                            <h5 className="d-flex flex-wrap justify-content-center">Welcome to finder - <span> map your world </span> <span>- {date}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;