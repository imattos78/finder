import React, { Component } from "react"
import axios from "axios";
import moment from "moment";
import './App.css';
import Header from './components/Header';
import TotalPharmacies from "./components/TotalPharmacies";
import AddPharmacy from "./components/AddPharmacy";
import PharmaciesList from "./components/PharmaciesList";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";





class App extends Component {
  
  // static contextType = Auth0Context;

  state = {
    pharmacies: [
      // { id: 1, location: "still.glory.blur", town: "Cheadle", late: 1, vaccine: 0, delivery: 0, e_pres: 1, date: "2019-10-15" }
      //id | location  | town     | late | vaccine | delivery | e_pres | date
    ]
  };
  componentDidMount() {
    axios.get("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies")

      .then((response) => {
        const pharmaciesFromDB = response.data;

        this.setState({
          pharmacies: pharmaciesFromDB

        })
      })

      .catch(err => {
        console.log("Error getting pharmacies data", err)
      });
  }

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
    }
    axios.post("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies", newItem)
      .then((response) => {
        console.log(response);
        const pharmaciesFromDB = response.data;
        pharmaciesCopy.push(pharmaciesFromDB)
        this.setState({
          pharmacies: pharmaciesCopy

        });
      })
      .catch((err) => {
        console.log("Error inserting product", err);
      });
  };

  deleteItem = id => {
    axios.delete(`https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies/${id}`)
      .then((response) => {
        const undeletedItems = this.state.pharmacies.filter(item => {
          return item.id !== id
        })
        this.setState({
          pharmacies: undeletedItems
        });
      })
      .catch((err) => {
        console.log(err);
      })

  };



  updateItem = (id, updateLate, updateVacc, updateDeliver, updateePres) => {
    const updatedPharmacies = this.state.pharmacies;
    let selectedPharmacy = {};
    updatedPharmacies.forEach(item => {
      if (item.id === id) {
        item.late = updateLate;
        item.vaccine = updateVacc;
        item.delivery = updateDeliver;
        item.e_pres = updateePres;
        item.date = moment().format('YYYY-MM-DD');
        selectedPharmacy = item;
      }
    });
    axios.put(`https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies/${id}`, selectedPharmacy)
      .then((response) => {
        this.setState({
          pharmacies: updatedPharmacies
        });
      })
      .catch((err) => {
        console.log("Error updating item", err)
      });
  
    }
  
  render() {
    const count = this.state.pharmacies.length;
    
    return (
      <div className="container">
        <Router history={history}>
          <div className="col-12">
        
        <NavBar />
        <Profile/>
         </div>
        <Header />
        <AddPharmacy addItemFunc={this.addNewItem} />
        <TotalPharmacies count={count} />
        <PharmaciesList pharmacies={this.state.pharmacies} deleteItemFunc={this.deleteItem} updateItemFunc={this.updateItem} />
        <Footer />
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
