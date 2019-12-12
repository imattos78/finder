import React from "react";

class PharmacyItem extends React.Component {
    render() {
        return (
            <div>
                <div className="row pb-3 mb-3">
                    <div className="col-3">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PharmacyItem;