import React from "react";
import logo from "../images/LogoMakr_8vj7Vz.png"
import './Header.css'

class Header extends React.Component {
    render() {
        const date = new Date().toDateString();

        return (
            <div className="row appRow">
                <div className="mx-auto col-12 col-lg-9 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <img className="card-title" src={logo} alt="Logo" />
                            <h5>Welcome to finder - map your world - {date}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;