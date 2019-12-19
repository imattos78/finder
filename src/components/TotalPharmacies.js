import React from "react";

class TotalPharmacies extends React.Component {
    render() {
        return (
            <div className="row d-none d-md-block">
                <div className="appRow mx-auto col-12 col-lg-9 mb-2">
                    <div className="card bg-white text-white">
                        <div className="card-body">
                            <h5 className="card-title">Pharmacies </h5>
                            <div className="card-text" color="#8200ff">
                                <h5>There are currently {this.props.count} pharmacies listed</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalPharmacies;