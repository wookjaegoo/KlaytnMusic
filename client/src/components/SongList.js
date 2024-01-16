import "./SongList.css";
import SongItem from "./SongItem";

const SongList = ({ songs = [], contract, user, contract2 }) => {
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
