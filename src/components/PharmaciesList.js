import React from "react";
import PharmacyItem from "./PharmacyItem"

class PharmaciesList extends React.Component {
    render() {
        return (

            <div className="card text-white bg-white mb-3" >
                <div className="card-header">
                    <h5>Pharmacies Found!</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Primary card title</h5>
                    <div className="card-text">
                        <div className="row taskRow">
                            <div className="col-2 col-md-1">
                                <h5>w3w</h5>
                            </div>

                            <div className="col-10 col-md-7 ">
                                <h5>Town</h5>
                            </div>
                            <div className="col-2 col-md-1">
                                <h5>L</h5>
                            </div>
                            <div className="col-2 col-md-1">
                                <h5>V</h5>
                            </div>
                            <div className="col-2 col-md-1">
                                <h5>D</h5>
                            </div>
                            <div className="col-2 col-md-1">
                                <h5>E</h5>
                            </div>


                            <h5><PharmacyItem text="pharmacy1" />Some quick example text to build on the card title and make up the bulk of the card's content.</h5></div>
                    </div>



                </div>

            </div>


        );
    }
}

export default PharmaciesList;