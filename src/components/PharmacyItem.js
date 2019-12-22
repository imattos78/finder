import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faRedoAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"
import Switch from "react-switch";

class PharmacyItem extends React.Component {
    
    constructor(props) {
        super(props);
let boolVacc=Boolean(this.props.vaccine)
console.log(boolVacc)
        this.state = {
            color: "blue",
            checked: Boolean(this.props.vaccine)

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleDelete = () => {
        this.props.deleteItemFunc(this.props.id);
    }

    handleUpdate = () => {
        this.props.updateItemFunc(this.props.id)

        this.setState({
            color: "black"
        })

    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        console.log(this.props.location)
        const link = "https://what3words.com/" + this.props.location
        console.log(link)
            ;
        return (
            <div>
                <div className="row pb-3 mb-3">
                    <h5 className="col-2 col-md-1"><a href={link} target="_blank" rel="noopener noreferrer"><img width="30 px" src={w3wlogo} alt="w3wLogo" /></a></h5>
                    <h5 className="col-10 col-md-5">{this.props.town}</h5>
                    <h5 className='col-2 col-md-1'>{this.props.late === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.vaccine === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.delivery === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.e_pres === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>

                    {/* <div className="late">
                        {this.props.late === 1 ?
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                            :
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={!this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                        }
                    </div>

                    <div className="vaccine">
                        {this.props.vaccine === 1 ?
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                            :
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={!this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                        }
                    </div> */}

                    {/* <div className="delivery">
                        {this.props.delivery === 1 ?
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                            :
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={!this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                        }
                    </div> */}

                    <div className="e_pres">
                        {this.props.e_pres === 1 ?
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                            :
                            <label>
                                <Switch
                                    onChange={this.handleChange}
                                    checked={!this.state.checked}
                                    className="react-switch"
                                    onColor="#8200ff"
                                    offColor="#8200ff"
                                />
                            </label>
                        }
                    </div>

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