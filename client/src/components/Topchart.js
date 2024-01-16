import "./Topchart.css";
import SongItem from "./SongItem";
import React from "react";

const Topchart = ({ songs = [], contract, user }) => {
  const songTags = songs.map((song, index) => {
    return (
      <SongItem
        song={song}
        key={index}
        index={index}
        contract={contract}
        user={{ user }}
      />
    );
  });

  return (
    <div className="Topchart">
      <div className="neon"> Hot100</div>
      <div id="top-list">{songTags}</div>
    </div>
  );
};

export default Topchart;
