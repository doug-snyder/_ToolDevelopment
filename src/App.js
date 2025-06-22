import "./App.css";
// import "./output.css";
import DropdownCreator from "./components/DropdownCreator";


function PageTitle() {
  return (
    <div>
      <h1 className="App">TRAVELMINS</h1>
    </div>
  );
}

function OriginSection() {
  return (
    <div className="subsection">
      <h3>ORIGIN</h3>
      <div className="dropdownSection" id="departureTime">
        Departure Time:
        <DropdownCreator />
      </div>
      <div className="dropdownSection" id="departureStation">
        Departure Station:
        <DropdownCreator />
      </div>
    </div>
  );
}

function DestinationSection() {
  return (
    <div className="subsection">
      <h3>DESTINATION</h3>
      <div className="dropdownSection" id="arrivalTime">
        Arrival Time:
        <DropdownCreator />
      </div>
      <div className="dropdownSection" id="arrivalStation">
        Arrival Station:
        <DropdownCreator />
      </div>
    </div>
  );
}

function CreateDropdown() {
  return (
    <select className="dropdownField">
      <option value="optionOne">item 1</option>
      <option value="optionTwo">item 2</option>
    </select>
  );
}


export default function Travelmins() {
  return (
    <>
      <PageTitle />
      <OriginSection />
      <DestinationSection />
    </>
  );
}
