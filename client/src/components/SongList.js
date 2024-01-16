import "./SongList.css";
import SongItem from "./SongItem";

const SongList = ({ songs = [], contract, user, contract2 }) => {
  //index 파라미터 박으면 map 메소드에 디폴트로 song 객체마다 순번을 매겨주는듯함

  const songTags = songs.map((song, index) => {
    return (
      <SongItem
        song={song}
        key={index}
        index={index}
        contract={contract}
        user={{ user }}
        contract2={contract2}
      />
    );
  });
  return <div id="song-list">{songTags}</div>;
};

export default SongList;
