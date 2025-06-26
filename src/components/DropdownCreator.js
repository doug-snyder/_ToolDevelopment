/* DropdownCreator.js */
import { useEffect, useState } from "react";
import axios from "axios";

const DropdownCreator = (props) => {

  // Set up JSON and get data
  const [travelminsData, setTravelminsData] = useState([]);
  useEffect(() => {
    axios.get("/travelmins.json").then((res) => {
      setTravelminsData(res.data.travelminsData);
    });
  }, []);

  if (props.dropdownType=="stations") {
    return (
      <select className="dropdownField">
        <option value="optionOne">{props.dropdownType} 1</option>
        <option value="optionTwo">{props.dropdownType} 2</option>
      </select>
    );
  } else
  if (props.dropdownType=="times") {
    return (
      <select className="dropdownField">
        <option value="optionOne">{props.dropdownType} 1</option>
        <option value="optionTwo">{props.dropdownType} 2</option>
      </select>
    );
  }
};

export default DropdownCreator;
