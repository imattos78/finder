import React from "react";
import {create} from "react-test-renderer";
import AddPharmacy from "../components/AddPharmacy";
import TotalPharmacies from "../components/TotalPharmacies";
import PharmaciesList from "../components/PharmaciesList";
import PharmacyItem from "../components/PharmacyItem";

describe("AddPharmacy component", () => {
    test("Matches the snapshot", () => {
      const pharmacies = create(<AddPharmacy />);
      expect(pharmacies.toJSON()).toMatchSnapshot();
    });
  });
  describe("TotalPharmacies component", () => {
    test("Matches the snapshot", () => {
      const totalPharmacies = create(<TotalPharmacies />);
      expect(totalPharmacies.toJSON()).toMatchSnapshot();
    });
  });
  describe("PharmaciesList component", () => {
    test("Matches the snapshot", () => {
      const pharmaciesList = create(<PharmaciesList />);
      expect(pharmaciesList.toJSON()).toMatchSnapshot();
    });
  });
  describe("PharmacyItem component", () => {
    test("Matches the snapshot", () => {
      const pharmaciesItem = create(<PharmacyItem />);
      expect(pharmaciesItem.toJSON()).toMatchSnapshot();
    });
  });