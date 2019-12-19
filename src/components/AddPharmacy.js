import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSyringe, faTruck, faLaptopMedical, faCity, faComment } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"
import moment from "moment";

class AddPharmacy extends React.Component {
    // const newItem = {
    //     location: itemLocation,
    //     town: itemTown,
    //     late: itemLate,
    //     vaccine: itemVacc,
    //     delivery: itemDeliver,
    //     e_pres: itemePres,
    //     date: moment().format("YYYY-MM-DD"),
    //     id: 27
    //   };
    state = {
        newLocation: "",
        newTown: "",
        late: 0,
        vaccs: 0,
        deliver: 0,
        ePres: 0,
        date: moment().format("YYYY-MM-DD"),
        comments: ""
    }


    handleChange(event) {
        event.preventDefault();
        console.log("new value", event.target.value);
        console.log("new state name", event.target.name)
        const value = event.target.value;
        this.props.addItemFunc(this.state.newLocation, this.state.newTown, this.state.late, this.state.vaccs, this.state.deliver, this.state.ePres, this.state.date, this.state.comments);
        // this.setState
        //     ({
        //          [event.target.name]: value
        //         // newLocation : value
        //       })
        console.log("new state", this.state)
    }


    updateText = (event) => {
        console.log("updateText")
        console.log("new value", event.target.value);
        console.log("new state name", event.target.name)
        const value = event.target.value;
        this.setState
            ({
                [event.target.name]: value,
            });
    }

    updateCheckboxes = (event) => {
        console.log("updateLate")
        console.log("new value", event.target.value);
        console.log("new state name", event.target.name)
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState
            ({
                [event.target.name]: value,
            });
    }

    render() {
        console.log("some text after AddPharm render", this.state)
        return (

            <form>
                <div id="add-pharmacy" className="row appRow">
                    <div className="mx-auto col-12 col-lg-9">
                        <div className="card bg-white text-white">
                            <div className="card-body">
                                <h5 className="card-title">Add new pharmacy </h5>
                                <div className="card-text">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group ">
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="examplew3wLocation"><img className="card-title" width="30 px" src={w3wlogo} alt="w3wLogo" /> Location</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="examplew3wLocation"
                                                        placeholder="office.cheeks.crush"
                                                        onChange={this.updateText}
                                                        name="newLocation"
                                                        value={this.state.newLocation}
                                                    ></input>
                                                </div>
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="exampleTown"><FontAwesomeIcon icon={faCity} /> Town</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleTown"
                                                        placeholder="Enter Town"
                                                        onChange={this.updateText}
                                                        name="newTown"
                                                        value={this.state.newTown}
                                                    ></input>
                                                </div>

                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="lateOpening"
                                                        name="late"
                                                        checked={this.state.late}
                                                        onChange={this.updateCheckboxes}></input>
                                                    <label className="form-check-label" htmlFor="lateOpening">Late Opening <FontAwesomeIcon icon={faMoon} /> </label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="vaccs"
                                                        name="vaccs"
                                                        checked={this.state.vaccs}
                                                        onChange={this.updateCheckboxes}
                                                    ></input>
                                                    <label className="form-check-label" htmlFor="vaccs">Vaccinations <FontAwesomeIcon icon={faSyringe} /> </label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="delivery"
                                                        name="deliver"
                                                        checked={this.state.deliver}
                                                        onChange={this.updateCheckboxes}
                                                    ></input>
                                                    <label className="form-check-label" htmlFor="delivery">Delivery <FontAwesomeIcon icon={faTruck} /></label>
                                                </div>
                                                <div className="form-group col-4 form-check form-check-inline">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="eScript"
                                                        name="ePres"
                                                        checked={this.state.ePres}
                                                        onChange={this.updateCheckboxes}
                                                    ></input>
                                                    <label className="form-check-label" htmlFor="eScript">e-Prescriptions accepted <FontAwesomeIcon icon={faLaptopMedical} /></label>
                                                </div>
                                                <div className="form-group col-12 col-lg-9">
                                                    <label htmlFor="exampleComments"><FontAwesomeIcon icon={faComment} /> Comments</label>
                                                    <input
                                                        type="textarea"
                                                        className="form-control"
                                                        id="exampleComments"
                                                        placeholder="Add your comments"
                                                        onChange={this.updateText}
                                                        name="comments"
                                                        value={this.state.comments}
                                                    ></input>
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