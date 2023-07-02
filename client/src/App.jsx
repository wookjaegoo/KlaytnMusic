//import { EthProvider } from "./contexts/EthContext";
import React from "react";
import "./App.css";
import Player from "./components/Player";
import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
import songs from "./data/songs.json"


function App() {
  
  const{state: {contract,account,songs,contract2,artifact2} } = useEth();
  console.log(account)
 

  return (
    <React.Fragment>
      <Remoter />   
         
      <Player songs={{songs}} contract={contract} account={account} contract2={contract2} artifact2={artifact2} />
    </React.Fragment>
    
  );
}

export default App;
