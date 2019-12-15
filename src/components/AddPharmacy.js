import React from "react";
import styles from "../App.css"

class AddPharmacy extends React.Component {

    render() {
        return (
            <form>


                <div id="add-pharmacy" className="row appRow">
                    <div className="mx-auto col-12 col-lg-8">
                        <div className="card bg-white text-white">
                            <div className="card-body">
                                <h5 className="card-title">Add new pharmacy </h5>
                                <div className="card-text">
                                    <div className="row">
                                        <div className="col-12 col-lg-8">
                                            <div className="input-group ">
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="examplew3wLocation">Location</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="examplew3wLocation"
                                                        placeholder="office.cheeks.crush"
                                                    ></input>
                                                </div>
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="exampleTown">Town</label>
                                                    <input type="text" className="form-control" id="exampleTown" placeholder="Enter Town"></input>
                                                </div>
                                                {/* <div className="form-group">
                    <label for="exampleInputTown">Town</label>
                    <input type="text" className="form-control" id="exampleInputTown" placeholder="Password"></input>
                </div> */}
                <p></p>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="lateOpening"></input>
                                                    <label className="form-check-label" htmlFor="lateOpening">Late Opening</label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="vaccs"></input>
                                                    <label className="form-check-label" htmlFor="vaccs">Vaccinations</label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="delivery"></input>
                                                    <label className="form-check-label" htmlFor="delivery">Delivery</label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" id="eScript"></input>
                                                    <label className="form-check-label" htmlFor="eScript">e-Prescriptions accepted</label>
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