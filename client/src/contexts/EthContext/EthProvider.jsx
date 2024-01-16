import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";
import caver from "../../klaytn/caver";

export function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  var songs = [];
  let songdata = "";

  const init = useCallback(async (artifact) => {
    if (artifact) {
      const { abi } = artifact;

      let address, contract;

      try {
        contract = new caver.contract(
          abi,
          "0x8c2f28afe28d208d153283355d855c7f2a73dc62"
        );

        console.log(contract);
        const bal = await caver.rpc.klay.getBalance(
          "0x892776eba67d184a407243e701770d1e647a8b28"
        );
        const hexval = bal.toString();
        const decimal = parseInt(hexval, 16);
        const yourclay = await caver.utils.convertFromPeb(decimal, "KLAY");
        const num = await contract.methods.totalSupply().call();

        for (let i = 0; i < num; i++) {
          const Writer = await contract.methods.tokenURI(i).call();

          const response = await fetch(Writer);
          if (!response.ok) throw new Error(response.statusText);
          let songss = await response.json();

          songs.push(songss);
          const listen_Count = await contract.methods.howmanyListen(i).call();
          songs[i].listenCount = parseInt(listen_Count);
        }
        const sortedSongs = songs
          .slice()
          .sort((a, b) => b.listenCount - a.listenCount);

        const updatedSongs = sortedSongs.map((song, index) => {
          return { ...song, index }; // 해당 객체의 index 프로퍼티를 갱신하여 반환
        });
        songdata = JSON.stringify(songs);
        console.log(updatedSongs);
      } catch (err) {
        console.error(err);
        console.log("에러위치");
      }
      dispatch({
        type: actions.init,
        data: { artifact, contract, songs, songdata },
      });
    }
  }, []);

  const init2 = useCallback(async (artifact2) => {
    if (artifact2) {
      const { abi } = artifact2;
      let contract2;
      try {
        contract2 = new caver.contract(
          abi,
          "0x219d8d386f2b377255db99d634e920ca482ba281"
        );
      } catch (err) {
        console.error(err);
      }
      dispatch({
        type: actions.init,
        data: { artifact2, contract2 },
      });
    }
  }, []);

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
        const artifact2 = require("../../contracts/Amaranthus.json");
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
  }, [init, state.artifact, state.artifact2]);

  return (
    <EthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
