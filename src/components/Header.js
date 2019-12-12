import React from "react";
import logo from "../images/LogoMakr_8vj7Vz.png"

class Header extends React.Component {
    render () {
        return (
            <div>
                 <img src={logo} alt="Logo" />
                <h5>Starter header for app</h5>
            </div>
        );
    }
}

export default Header;