import React, { Component } from "react"
import moment from "moment";
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";
import Footer from './components/Footer';

class App extends Component {

  state = {
    pharmacies: [
    { id: 1, location: "still.glory.blur", town: "Cheadle", late: 1, vaccine: 0, delivery: 0, e_pres:1, date: "2019-10-15"},
    { id: 2, location: "index.impose.create", town: "Wythenshawe", late: 1, vaccine: 1, delivery: 1, e_pres:1, date: "2019-12-15"},
    { id: 3, location: "breed.calms.forget", town: "Greater Manchester", late: 1, vaccine: 0, delivery: 0, e_pres:1, date: "2019-11-15"},
    { id: 4, location: "pretty.device.overnight", town: "Fallowfield", late: 1, vaccine: 0, delivery: 1, e_pres:1, date: "2019-09-15"},
    { id: 5, location: "usage.belts.fuzzy", town: "Stockport", late: 0, vaccine: 1, delivery: 1, e_pres:1, date: "2019-12-16"}
    //id | location  | town     | late | vaccine | delivery | e_pres | date
    ]
  };

  addNewItem = (itemLocation, itemTown, itemLate, itemDeliver, itemVacc, itemePres) => {
    const pharmaciesCopy = this.state.pharmacies.slice();
    const newItem = {
      location: itemLocation,
      town: itemTown,
      late: itemLate,
      vaccine: itemVacc,
      delivery: itemDeliver,
      e_pres: itemePres,
      date: moment().format("YYYY-MM-DD"),
      id: 27
    };
    pharmaciesCopy.push(newItem)
    this.setState({
      pharmacies: pharmaciesCopy
    });
  };

  deleteItem = id => {
    const undeletedItems = this.state.pharmacies.filter(item => {
      return item.id !== id
    });
    this.setState({
      pharmacies: undeletedItems
    });
  }

  updateItem = id => {
    const updatedItems = this.state.pharmacies.map(item => {
      if (item.id === id) {
        item.late = 0;
        item.vaccine = 0;
        item.delivery = 0;
        item.e_pres = 0;
      }
      return item
    });
    this.setState({
      pharmacies: updatedItems
    });
  }

  render() {
    const count = this.state.pharmacies.length;
    return (
      <div className="container">
        <Header />
        <TotalPharmacies count={count}/>
        <AddPharmacy addItemFunc={this.addNewItem}/>
        <PharmaciesList pharmacies={this.state.pharmacies} deleteItemFunc={this.deleteItem} updateItemFunc={this.updateItem}/>
        <Footer />
      </div>
    )
  }
}


export default App;
