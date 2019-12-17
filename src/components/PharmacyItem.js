import React from "react";

class PharmacyItem extends React.Component {
    render() {
        console.log(this.props.location)
        return (
            <div>
                <div className="row pb-3 mb-3">
                    <h5 className="col-2 col-md-1">{this.props.location}</h5> 
                    <h5 className="col-8 col-md-5">{this.props.town}</h5>
                    <h5 className="col-2 col-md-1">{this.props.late}</h5>
                    <h5 className="col-2 col-md-1">{this.props.vaccine}</h5>
                    <h5 className="col-2 col-md-1">{this.props.delivery}</h5>
                    <h5 className="col-2 col-md-1">{this.props.e_pres}</h5>
                </div>
            </div>
        );
    }
}

export default PharmacyItem;