import "./SongDetail.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

var src1 = "";
var src2 = "";
const SongDetail = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
}) => {
  if (songs[selectedSongId] !== "undefined" && songs[selectedSongId] != null) {
    defaultSong = songs[0];
  }
  if (songs.songs !== "undefined" && songs.songs != null) {
    defaultSong = songs.songs[0];
  }

  songs = JSON.stringify(songs);

  const songData = () => {
    if (selectedSongId >= 0) {
      return (
        <>
          <div className="now-playing">
            <div id="active">
              <strong>Now playing</strong>
            </div>
            <div className="header">{songs[selectedSongId].name}</div>
          </div>
          <div className="album-img">
            <img src={src2} alt={songs[selectedSongId].name} />
          </div>
          <div className="artist-img">
            <img src={src1} alt={songs[selectedSongId].author} />
            <p className="artist-name">{songs[selectedSongId].author}</p>
          </div>
        </>
      );
    } else {
      selectSong(defaultSong);
      return null;
    }
  };

  return <div className="song-detail">{songData()}</div>;
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    // defaultSong:state.songs.songs[0],
    // songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);
