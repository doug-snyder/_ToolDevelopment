import "./App.css";
import ExampleComponent from "./components/compOne";


function PageTitle() {
  return (
    <h1 className="App">TRAVELMINS</h1>
  );
}

function OriginSection() {
  return (
    <h3>ORIGIN</h3>
  );
}

function DestinationSection() {
  return (
    <h3>DESTINATION</h3>
  );
}


export default function Travelmins() {
  return (
    <div>
      <PageTitle />
      <OriginSection />
      <DestinationSection />
    </div>
  );
}
