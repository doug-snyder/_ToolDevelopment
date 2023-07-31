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
        <CreateDropdown />
      </div>
      <div className="dropdownSection">
        Departure Station:
        <CreateDropdown />
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
        <CreateDropdown />
      </div>
      <div className="dropdownSection">
        Arrival Station:
        <CreateDropdown />
      </div>
    </div>
  );
}

function CreateDropdown() {
  return (
    <select className="dropdownField">
      <option value="optionOne">- - -</option>
      <option value="optionTwo">- - -</option>
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
