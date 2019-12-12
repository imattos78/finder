import React, { Component } from "react"
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";


class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TotalPharmacies />
        <AddPharmacy />
        <PharmaciesList />
      </div>
    )
  }
}


export default App;
