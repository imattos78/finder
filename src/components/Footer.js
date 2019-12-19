import React from "react";
import w3wlogo from "../images/w3w_logo.png";
import aclogo from "../images/LogoMakr_0bAO9b.png"; 
class Footer extends React.Component {
    render() {
        return (
            <div className="row d-none d-md-block mt-2">
                <div className="mx-auto col-12 col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                            <h5><img width="90 px" src={aclogo} alt="acLogo" /> &#169; Always Curious 2020 <img width="90 px" src={aclogo} alt="acLogo" /></h5>
                            

                            <h6><img width="30 px" src={w3wlogo} alt="w3wLogo" /> Locations mapped using <a href="https://what3words.com/" target="_blank" rel="noopener noreferrer">my3words</a></h6>
                            <h6>Logos created free at<a href="https://LogoMakr.com" target="_blank" rel="noopener noreferrer"> LogoMakr.com</a> </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default Footer;

