//import { EthProvider } from "./contexts/EthContext";
import React from "react";
import "./App.css";
import Player from "./components/Player";
import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";



function App() {
  
  const{state: {contract,account,songs,songdata} } = useEth();
 

  return (
    <React.Fragment>
      <Remoter songs={songs} />   
         
      <Player songs={{songs}} contract={contract} accounts={account} />
    </React.Fragment>
    
  );
}

export default App;
