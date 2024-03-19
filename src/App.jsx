import "./App.css";
import DaisyNav from "./components/daisynav/DaisyNav";
import Graph from "./components/lineChart/Graph";
import Navbar from "./components/navbar/Navbar";
import Price from "./components/priceoption/Price";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <Price></Price>
      <Graph></Graph>
      
    </>
  );
}

export default App;
