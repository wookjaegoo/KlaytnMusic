import "./Topchart.css";
import SongItem from "./SongItem";
import React from "react";
//이때 파라미터로받는 songs=[]이거는 아마도 reducers의 songs인듯 이게아니면 설명이안됨
//각각 props이 어디서 날라오는지 확인하는게 좀 많이 어려운거같다.

// const SongList = ({ songs = [] }) => {
//     const songTags = songs.map((song, index) => {
//         return <SongItem song={song} key={index} index={index} />;
//     });
//     return <div id="song-list">{songTags}</div>;
// };

// export default SongList;

    const Topchart = ({ songs = [] }) => {
    const songTags = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index} />;
    });
  
  
    return (
        
<div className="Topchart">
            
    <div className="neon"> Hot100</div>
          <div id="top-list">
        {songTags}
    </div>
</div>
        )
};


export default Topchart;
