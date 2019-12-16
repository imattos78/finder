import React, { Component } from "react"
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";
import Footer from './components/Footer';

class App extends Component {

  state = {
    pharmacy: [
    { id: 1, location: "still.glory.blur", town: "Cheadle", late: 1, vaccine: 0, delivery: 0, e_pres:1, date: "2019-10-15"},
    { id: 2, location: "index.impose.create", town: "Wythenshawe", late: 1, vaccine: 1, delivery: 1, e_pres:1, date: "2019-12-15"},
    { id: 3, location: "breed.calms.forget", town: "Greater Manchester", late: 1, vaccine: 0, delivery: 0, e_pres:1, date: "2019-11-15"},
    { id: 4, location: "pretty.device.overnight", town: "Fallowfield", late: 1, vaccine: 0, delivery: 1, e_pres:1, date: "2019-09-15"},
    { id: 5, location: "usage.belts.fuzzy", town: "Stockport", late: 0, vaccine: 1, delivery: 1, e_pres:1, date: "2019-12-16"}
    //id | location  | town     | late | vaccine | delivery | e_pres | date
    ]
  };

  render() {

    return (
      <div className="container">
        <Header />
        <TotalPharmacies />
        <AddPharmacy />
        <PharmaciesList />
        <Footer />
      </div>
    )
  }
}


export default App;
