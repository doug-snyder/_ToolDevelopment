import "./App.css";
import ExampleComponent from "./components/compOne";


function PageTitle() {
  return (
    <h1 className="App">Travelmins</h1>
  );
}

function OriginHalf() {

}

function DestinationHalf() {

}


export default function Travelmins() {
  return (
    <div>
      <PageTitle />
      <ExampleComponent />
    </div>
  );
}
