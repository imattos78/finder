import React, { Component } from "react"
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";
import Footer from './components/Footer';
import background from './images/LogoMakr_8jXFz0.png';

class App extends Component {
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
