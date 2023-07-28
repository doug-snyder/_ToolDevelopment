import "./App.css";
import "./output.css";
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
    <div class="w-60">
      <h3>ORIGIN</h3>
    </div>
  );
}

function DestinationSection() {
  return (
    <div class="w-60">
      <h3>DESTINATION</h3>
    </div>
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
