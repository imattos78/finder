import React from "react";
import PharmacyItem from "./PharmacyItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSyringe, faTruck, faLaptopMedical, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"


class PharmaciesList extends React.Component {
    render() {
        return (

            <div id="list-pharmacy" className="row appRow">
                <div className="mx-auto col-12 col-lg-9">
                    <div className="card bg-white mb-3" >

                        <div className="card-header bg-transparent">
                            <h5>Pharmacies Found!</h5>
                            <div className="row taskRow">
                                <div className="col-2 col-md-1">
                                    <h5><FontAwesomeIcon icon={faMapMarked} /></h5>
                                </div>

                                <div className="col-8 col-md-5 ">
                                    <h6>Town</h6>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h5><FontAwesomeIcon icon={faMoon} /></h5>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h5><FontAwesomeIcon icon={faSyringe} /></h5>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h5><FontAwesomeIcon icon={faTruck} /></h5>
                                </div>
                                <div className="col-2 col-md-1">
                                    <h5><FontAwesomeIcon icon={faLaptopMedical} /></h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <div className="card-text">



                                <h5><PharmacyItem text="pharmacy1" />Some quick example text to build on the card title and make up the bulk of the card's content.</h5></div>
                        </div>
                    </div>


                </div>


            </div>

        );
    }
}

export default PharmaciesList;