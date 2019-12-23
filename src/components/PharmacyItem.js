import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faRedoAlt, faMoon, faSyringe, faTruck, faLaptopMedical, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"
import Switch from "react-switch";

class PharmacyItem extends React.Component {

    constructor(props) {
        super(props);
        let boolVacc = Boolean(this.props.vaccine)
        console.log(boolVacc)
        this.state = {
            color: "blue",
            categories: [
                { id: 1, text: <FontAwesomeIcon icon={faMoon} /> , checked: Boolean(this.props.late) },
                { id:2, text: <FontAwesomeIcon icon={faSyringe} />, checked: Boolean(this.props.vaccine) },
                { id:3, text: <FontAwesomeIcon icon={faTruck} />, checked: Boolean(this.props.delivery) },
                { id:4, text: <FontAwesomeIcon icon={faLaptopMedical} />, checked: Boolean(this.props.e_pres) },
            ]

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

    renderCatList() {
        console.log("renderCatList called")
        console.log(this.state.categories[0].checked)
        const late = this.state.categories[0].checked === true ? 1 : 0;
        const vaccine = this.state.categories[1].checked === true ? 1 : 0;
        const delivery = this.state.categories[2].checked === true ? 1 : 0;
        const e_pres = this.state.categories[3].checked === true ? 1 : 0;
        console.log(late, vaccine, delivery, e_pres)
        console.log(this.state.categories) 
        
        console.log("late")

        const catList = this.state.categories.map((category, i, catArray) =>
            <div>
                <span>{category.text}  </span>
                <span key={category.id}>
                <Switch
                    onChange={(toggleValue) => {
                        catArray[i].checked = toggleValue;
                        this.setState({ categories: catArray });
                    }}
                    checked={category.checked}
                    className="react-switch"
                    onColor="#8200ff"
                    offColor="#8200ff"
                    height={20}
                    width={40}
                /></span>
            </div>
        )
        return catList;
    }




    render() {
        console.log(this.props.location)
        const link = "https://what3words.com/" + this.props.location
        console.log(link)
            ;
        return (
            <div>
                <div className="row pb-3 mb-3">
                    <h5 className="col-2 col-md-2"><a href={link} target="_blank" rel="noopener noreferrer"><img width="30 px" src={w3wlogo} alt="w3wLogo" /></a></h5>
                    <h5 className="col-10 col-md-3">{this.props.town}</h5>
                    {/* <h5 className='col-2 col-md-1'>{this.props.late === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.vaccine === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.delivery === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5>
                    <h5 className="col-2 col-md-1">{this.props.e_pres === 1 ? <FontAwesomeIcon icon={faCheckCircle} className={this.state.color} /> : <FontAwesomeIcon icon={faTimesCircle} className={this.state.color} />}</h5> */}

                    <div className="col-8 col-md-4">
                       <h5 display="inline"> {this.renderCatList()}</h5>
                    </div>

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

                    {/* <div className="e_pres">

                    <label>
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            className="react-switch"
                            onColor="#8200ff"
                            offColor="#8200ff"
                        />
                    </label>

                </div> */}

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