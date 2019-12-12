import React from "react";
import PharmacyItem from "./PharmacyItem"

class PharmaciesList extends React.Component {
    render () {
        return (
            <div>
                
                <h5>This component will dynamically list all pharmacies stored in the database</h5>
                <PharmacyItem text="pharmacy1"/>
                <PharmacyItem text="Ann's pharmacy"/>
                <PharmacyItem text="Saba's pharmacy"/>
                <PharmacyItem text="Nacho's pharmacy"/>


            </div>
        );
    }
}

export default PharmaciesList;