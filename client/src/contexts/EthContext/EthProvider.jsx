import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";
import caver from "../../klaytn/caver";
import { prepare, request, getResult, getCardList } from 'klip-sdk'

export function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  var songs = []
  let songdata=""

  const init = useCallback(

    async artifact => {
      if (artifact) {

        // const bappName = 'my app';
        // let requestkey
        
        // const res = await prepare.auth({bappName})
        
        // if (res.err) {
        //   // 에러 처리
        // } else if (res.request_key) {
        //   // request_key 보관
        //   requestkey=res.request_key;

        // }

        //klip지갑 연동부분 모바일에서 가능 

        // request(
        //   requestkey, 
        //   () => alert('모바일 환경에서 실행해주세요')
        // );


        if (typeof window.klaytn != "undefined") {
          // Kaikas user detected. You can now use the provider.
          
         
         

        }
        // const provider = window["klaytn"];
        // if (provider) {
        //   try {
        //     await provider.enable()
        //     console.log(provider)
        //     provider.on('accountsChanged', () => this.setAccountInfo(provider))
        //   } catch (error) {
        //     console.log(error)
        //     console.log('User denied account access')
        //   }
        // } else {
        //   console.log('Non-Kaikas browser detected. You should consider trying Kaikas!')
        // }
        
       
     
        const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");
        // const accounts = await web3.eth.requestAccounts();
        // const networkID = await web3.eth.net.getId();
        
        const account = await window.klaytn.enable();


        const { abi } = artifact;
  
        let address, contract;

        try {

           
          contract = new caver.klay.Contract(abi,'0xe6360db3b1119209b88dc09fbadca9652c6e8d83');
          const num = await contract.methods.totalSupply().call();

          for (let i = 0; i < num ; i++) {

            const Writer = await contract.methods.tokenURI(i).call();


            const response = await fetch(Writer);
            if (!response.ok)
              throw new Error(response.statusText);
            let songss = await response.json();
            
            songs.push(songss);

          }
          songdata=JSON.stringify(songs)

          //player 한테는 songs를 넘겨주고 songdata 는 리스트니까 songlist한테 넘겨줘야함

        } catch (err) {
          console.error(err);
          console.log("에러위치");
        }
        dispatch({
          type: actions.init,
          data: { artifact,web3,contract,account,songs,songdata}
        });
      }
    }, []);


    // const init2 = useCallback(
    //   async artifact2 =>
    //   {
    //     if(artifact2)
    //     {
    //       const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");
    //       const {abi} = artifact2;
    //       const networkID = await web3.eth.net.getId();
    //       let address2, contract2;
    //       try{
    //         address2 = artifact2.networks[networkID].address;
    //         contract2 = new web3.eth.Contract(abi, address2);
        
            
    //       }
    //       catch (err) {
    //         console.error(err);
    //       }
    //       dispatch({
    //         type: actions.init,
    //         data: {artifact2, contract2}
    //       });
  
    //     }
    //   },[])
    
    
    
  // useEffect(() => {
  //   const tryInit = async () => {
  //     try {
  //       const artifact2= require("../../contracts/Amaranthus.json")
  //       init2(artifact2);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   tryInit();
  // }, [init2]);

    
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/ArtGrowNFT.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  
  // useEffect(() => {
  //   const tryInit = async () => {
  //     try {
  //       const artifact2= require("../../contracts/Amaranthus.json")
  //       init2(artifact2);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   tryInit();
  // }, [init2]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);

    };
    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init,state.artifact]);

  // useEffect(() => {
  //   const events = ["chainChanged", "accountsChanged"];
  //   const handleChange = () => {
  //     init2(state.artifact2);
  //   };

  //   events.forEach(e => window.ethereum.on(e, handleChange));
  //   return () => {
  //     events.forEach(e => window.ethereum.removeListener(e, handleChange));
  //   };
  // }, [init2, state.artifact2]);

  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
    
  );
}


export default EthProvider;

