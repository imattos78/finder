import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faRedoAlt, faMoon, faSyringe, faTruck, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import w3wlogo from "../images/w3w_logo.png"
import Switch from "react-switch";
import Dialog from 'react-bootstrap-dialog'


class PharmacyItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            categories: [
                { id: 1, text: <FontAwesomeIcon icon={faMoon} />, checked: Boolean(this.props.late) },
                { id: 2, text: <FontAwesomeIcon icon={faSyringe} />, checked: Boolean(this.props.vaccine) },
                { id: 3, text: <FontAwesomeIcon icon={faTruck} />, checked: Boolean(this.props.delivery) },
                { id: 4, text: <FontAwesomeIcon icon={faLaptopMedical} />, checked: Boolean(this.props.e_pres) },
            ],
            late: 0,
            vaccine: 0,
            delivery: 0,
            e_pres: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleDelete = () => {
        this.dialog.show({
            title: 'Delete Pharmacy',
            body: 'Press OK to confirm your action',
            actions: [
              Dialog.CancelAction(),
              Dialog.OKAction(()=>{
                this.props.deleteItemFunc(this.props.id)
              })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('closed by clicking background.')
            }
          })
    }

    handleUpdate = () => {
        this.dialog.show({
            title: 'Update State',
            body: 'Press OK If You Want To Send These Updates To The Database',
            actions: [
              Dialog.CancelAction(),
              Dialog.OKAction(()=> {
              const late = this.state.categories[0].checked === true ? 1 : 0;
              const vaccine = this.state.categories[1].checked === true ? 1 : 0;
              const delivery = this.state.categories[2].checked === true ? 1 : 0;
              const e_pres = this.state.categories[3].checked === true ? 1 : 0;
              this.props.updateItemFunc(this.props.id, late, vaccine, delivery, e_pres)
              })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('closed by clicking background.')
            }
          })
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    renderCatList() {
        const catList = this.state.categories.map((category, i, catArray) =>
            <div key={i}>
                <span >
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
        const link = "https://what3words.com/" + this.props.location;
        return (
            <div>
                <div className="row pb-3 mb-3 d-flex align-items-end">
                    <h5 className="col-2 col-md-2"><a href={link} target="_blank" rel="noopener noreferrer"><img width="30 px" src={w3wlogo} alt="w3wLogo" /></a></h5>
                    <h5 className="col-10 col-md-3">{this.props.town}</h5>
                    <div className="col-8 col-md-4">
                        <h5 display="inline" className="d-flex justify-content-around"> {this.renderCatList()}</h5>
                    </div>
                    <div className="col-1">
                        <button className="btn shadow-none" onClick={this.handleUpdate}><FontAwesomeIcon icon={faRedoAlt} /></button>
                        <Dialog ref={(component) => { this.dialog = component }} />

                    </div>
                    <div className="col-1">
                        <button className="btn" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        <Dialog ref={(component) => { this.dialog = component }} />

                    </div>
                </div>
            </div >
        );
    }
}

export default PharmacyItem;