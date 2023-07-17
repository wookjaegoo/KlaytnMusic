import React from "react";
import "./App.css";
import Player from "./components/Player";
import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
// import songs from "./data/songs.json"
import axios from "axios";
import { useEffect,useState } from "react";


function App() {
  
  const [songs, updateSong] = useState();

  const callApi = async()=>{
    axios.get("http://localhost:3001/api")
    .then((res)=>{console.log(res.data.test)})
    .catch(error=>{console.error('요청실패',error)});
    axios.get("http://localhost:3001/api/play-transaction")
    .then((res)=>{console.log(res.data.test)})
    .catch(error=>{console.error('요청실패',error)});
    axios.get("http://localhost:3001/api/songList")
    .then((res)=>{
      updateSong(res.data)
      console.log(songs)})
    .catch(error=>{console.error('요청실패',error)});
  };

  useEffect(()=>{
    callApi();
  }, []);


  const{state: {contract,account,contract2} } = useEth();
  // console.log(songs)

  //백에서 songs던지는 로직으로 수정 7/17

  return (
    <React.Fragment>
      <Remoter />   
      <Player songs={{songs}} contract={contract} account={account} contract2={contract2}  />
    </React.Fragment>
    
  );
}

export default App;
