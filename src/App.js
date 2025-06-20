import "./App.css";
// import "./output.css";
import ExampleComponent from "./components/compOne";


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
      <div className="dropdownSection">
        Departure Time:
        <select className="dropdownField">
          <option value="optionOne">time 1</option>
          <option value="optionTwo">time 2</option>
        </select>
      </div>
      <div className="dropdownSection">
        Departure Station:
        <select className="dropdownField">
          <option value="optionOne">station 1</option>
          <option value="optionTwo">station 2</option>
        </select>
      </div>
    </div>
  );
}

function DestinationSection() {
  return (
    <div className="subsection">
      <h3>DESTINATION</h3>
      <div className="dropdownSection">
        Arrival Time:
        <select className="dropdownField">
          <option value="optionOne">time 1</option>
          <option value="optionTwo">time 2</option>
        </select>
      </div>
      <div className="dropdownSection">
        Arrival Station:
        <select className="dropdownField">
          <option value="optionOne">station 1</option>
          <option value="optionTwo">station 2</option>
        </select>
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
