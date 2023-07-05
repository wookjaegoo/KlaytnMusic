import React from "react";
import "./App.css";
import Player from "./components/Player";
import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
// import songs from "./data/songs.json"
import axios from "axios";
import { useEffect } from "react";


function App() {
  
  const{state: {contract,account,songs,contract2} } = useEth();

  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);

  
 

  return (
    <React.Fragment>
      <Remoter />   
         
      <Player songs={{songs}} contract={contract} account={account} contract2={contract2}  />
    </React.Fragment>
    
  );
}

export default App;
