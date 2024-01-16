import React from "react";
import SongDetail from "./SongDetail";
import SongListHeader from "./SongListHeader";
import SongList from "./SongList";
// import songs from "../data/songs.json"
import useEth from "../contexts/EthContext/useEth";

function Main({ user, contract, songs, contract2 }) {
  return (
    <React.Fragment>
      <SongListHeader />
      <SongList
        songs={songs}
        contract={contract}
        user={user}
        contract2={contract2}
      />
      <SongDetail songs={{ songs }} />
      {/* <Player /> */}
      <a href="#focused" id="focus-link" hidden>
        Go to playing element
      </a>
    </React.Fragment>
  );
}

export default Main;
