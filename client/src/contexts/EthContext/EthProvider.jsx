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
        console.log(account)


        const { abi } = artifact;
  
        let address, contract;

        try {

          // const keyting=caver.wallet.keyring.generate();
          // console.log(keyting)
          //pvkey 입력받고 caver.wallet에 모두 추가한뒤에 signedtr결제로직으로 구성해야함
          //이거로 클레이튼 계정만들기는 가능 signedtr할때 개인키 입력 부분이 문제 
          contract = new caver.klay.Contract(abi,'0xfbb92bf30d685385d2f1d160242e66350482816a');
          const count = await contract.methods.howmanyListen(1).call();
          console.log(count)



          // contract = new caver.klay.Contract(abi,'0x487dafee9b64044a04a2577f388eb2c8e2fea14a');
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
          //songslist는 토큰아이디 집합으로 이루어진 json이어야해

        } catch (err) {
          console.error(err);
          console.log("에러위치");
        }
        dispatch({
          type: actions.init,
          data: { artifact,web3,contract,account,songs,songdata}
        });
      }
    },[]);


    const init2 = useCallback(
      async artifact2 =>
      {
        if(artifact2)
        {
          const {abi} = artifact2;
          let address2, contract2;
          try{
            contract2 = new caver.klay.Contract(abi,'0x9fbf326fda60bbfcf19c098c73bdfea65d442b0d');
            
            
          }
          catch (err) {
            console.error(err);
          }
          dispatch({
            type: actions.init,
            data: {artifact2, contract2}
          });
  
        }
      },[])
    
    
    
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

  
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact2= require("../../contracts/Amaranthus.json")
        init2(artifact2);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init2]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
      init(state.artifact2);

    };
    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init,state.artifact,state.artifact2]);

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

