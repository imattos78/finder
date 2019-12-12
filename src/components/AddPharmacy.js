import React from "react";

class AddPharmacy extends React.Component {

    render() {
        return (
            <form>




                <div className="form-group">
                    <label htmlFor="examplew3wLocation">Location</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="examplew3wLocation" 
                    placeholder="office.cheeks.crush"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleTown">Town</label>
                    <input type="email" className="form-control" id="exampleTown" aria-describedby="emailHelp" placeholder="Enter Town"></input>
                </div>
                {/* <div className="form-group">
                    <label for="exampleInputTown">Town</label>
                    <input type="text" className="form-control" id="exampleInputTown" placeholder="Password"></input>
                </div> */}
                <div className="form-group form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="lateOpening"></input>
                        <label className="form-check-label" htmlFor="lateOpening">Late Opening</label>
                </div>
                <div className="form-group form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="vaccs"></input>
                        <label className="form-check-label" htmlFor="vaccs">Vaccinations</label>
                </div>
                <div className="form-group form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="delivery"></input>
                        <label className="form-check-label" htmlFor="delivery">Delivery</label>
                </div>
                <div className="form-group form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="eScript"></input>
                        <label className="form-check-label" htmlFor="eScript">e-Prescriptions accepted</label>
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        );
    }
}

export default AddPharmacy;