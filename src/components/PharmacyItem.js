import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faRedoAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"


class PharmacyItem extends React.Component {
    handleDelete = () => {
        this.props.deleteItemFunc(this.props.id);
    }

    handleUpdate = () => {
        this.props.updateItemFunc(this.props.id)
    }

    render() {
        console.log(this.props.location)
        const link = "https://what3words.com/" + this.props.location
        console.log(link)
        return (
            <div>
                <div className="row pb-3 mb-3">
                    <h5 className="col-2 col-md-1"><a href={link} target="_blank" rel="noopener noreferrer"><img width="30 px" src={w3wlogo} alt="w3wLogo" /></a></h5>
                    <h5 className="col-5 col-md-5">{this.props.town}</h5>
                    <h5 className="col-2 col-md-1">{this.props.late === 1 ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.vaccine === 1 ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.delivery === 1 ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.e_pres === 1 ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}</h5>
                    <div className="col-1">
                        <button className="btn" onClick={this.handleUpdate}><FontAwesomeIcon icon={faRedoAlt} /></button>
                    </div>
                    <div className="col-1">
                        <button className="btn" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </div>
            </div >
        );
    }
}

export default PharmacyItem;