import "./SongDetail.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

//songdetail에서는 indedx에서 export한 songs데이터를 받잖아. 이러면 songlist에서 직접 songs를 구현해도 무의미한거지..
//그니까 만약 전자처럼하려면 각각 js에서 훅을 사용해서 블록데이터 긁어야하는데.. 진짜사고임 이러면

var src1=''
var src2=''
const SongDetail = ({
  selectedSongId = -1,
  // defaultSong,
  selectSong,
  songs=[],
}) => {
  //이게 메인에서 넘겨줄대 배열json songs로 넘겨주면 songs=[]로 받으셈
  var defaultSong=songs[0];

  if(songs[selectedSongId] !== 'undefined' && songs[selectedSongId] != null)
  {
      //  src1= songs[selectedSongId].links.images[0].url;
      //  src2= songs[selectedSongId].links.images[1].url;
     
  }

  
  //if문으로 null리턴 예외 처리 안해주면 오류뱉음 필수적으로 써줘야함
  songs=JSON.stringify(songs)
  
  //JSON배열이아닌 객체로 접근하면 STRING 인덱스 리턴해주네.. 이래서 undefined오류뜨던거임.
  //객체 접근하려는데 오류뜨는 상황 ㅋㅋㅆ발
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
            <img
              src={src2}
              alt={songs[selectedSongId].name}
            />
          </div>
          <div className="artist-img">
            <img
              src={src1}
              alt={songs[selectedSongId].author}
            />
            <p className="artist-name">{songs[selectedSongId].author}</p>
          </div>
        </>
      );
    } else {
      selectSong(defaultSong);
      return null;
    }
  };
  
  // ${songs[selectedSongId].links.images[1].url}

  return (
    
    <div
      className="song-detail"
      // style={{
      //   backgroundImage: `url(
      //     ${src2}
      //   )`,
      // }}
    >
      {songData()}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    // defaultSong:songs[0]
    // songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);
