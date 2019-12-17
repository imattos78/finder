import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSyringe, faTruck, faLaptopMedical, faCity, faComment } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"

class AddPharmacy extends React.Component {

    render() {
        return (
            <form>


                <div id="add-pharmacy" className="row appRow">
                    <div className="mx-auto col-12 col-lg-9">
                        <div className="card bg-white text-white">
                            <div className="card-body">
                                <h5 className="card-title">Add new pharmacy </h5>
                                <div className="card-text">
                                    <div className="row">
                                        <div className="col-12 col-lg-8">
                                            <div className="input-group ">
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="examplew3wLocation"><img className="card-title" width="30 px" src={w3wlogo} alt="w3wLogo" /> Location</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="examplew3wLocation"
                                                        placeholder="office.cheeks.crush"
                                                    ></input>
                                                </div>
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="exampleTown"><FontAwesomeIcon icon={faCity} /> Town</label>
                                                    <input type="text" className="form-control" id="exampleTown" placeholder="Enter Town"></input>
                                                </div>

                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="lateOpening"></input>
                                                    <label className="form-check-label" htmlFor="lateOpening">Late Opening <FontAwesomeIcon icon={faMoon} /></label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="vaccs"></input>
                                                    <label className="form-check-label" htmlFor="vaccs">Vaccinations <FontAwesomeIcon icon={faSyringe} /></label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="delivery"></input>
                                                    <label className="form-check-label" htmlFor="delivery">Delivery <FontAwesomeIcon icon={faTruck} /></label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="eScript"></input>
                                                    <label className="form-check-label" htmlFor="eScript">e-Prescriptions accepted <FontAwesomeIcon icon={faLaptopMedical} /></label>
                                                </div>
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="exampleComments"><FontAwesomeIcon icon={faComment} /> Comments</label>
                                                    <input type="textarea" className="form-control" id="exampleComments" placeholder="Add your comments"></input>
                                                </div>
                                            
                                                <div className="col-12">
                                                    <button type="submit" className="add">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        );
    }
}

export default AddPharmacy;