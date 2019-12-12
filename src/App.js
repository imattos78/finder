import React, { Component } from "react"
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";


class App extends Component {
  render () {
    const date = new Date().toDateString();
    return (
      <div className="container">
        <Header />
        <div className="col-3">
          <p>Hello, today is {date}</p>
        </div>
        <TotalPharmacies />
        <AddPharmacy />
        <PharmaciesList />
      </div>
    )
  }
}


export default App;
