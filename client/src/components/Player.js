import "./Player.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg, shuffleSvg } from "../svg";
import { setPlayerState, selectSongById, setNftData } from "../actions";
import Progress from "./ProgressBar";
import SongTime from "./SongTime";
import caver from "../klaytn/caver";
import axios from "axios";
import { message } from "antd";

var src = "";

const Player = ({
  selectedSongId,
  defaultSong,
  playerState,
  songs,
  selectSongById,
  volume,
  account,
  contract,
  contract2,
  accounts,
  web3,
  nftData,
  user,
}) => {
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState(false);
  const audioRef = useRef();
  let clicked = false;
  const [lockedTime, setLockedTime] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  if (user.user !== "undefined" && user.user != null) {
  }

  if (songs.songs !== "undefined" && songs.songs != null) {
    src = songs.songs[selectedSongId].url;
  }

  const songOwnerSender = async (tokenId) => {
    const owner_Address = await contract.methods.owner(tokenId).call();
    nftData.receiver_address = owner_Address;
    dispatch({ type: "SET_NFT_DATA", payload: nftData });
  };

  useEffect(() => {
    async function fetchLockedTime() {
      const lockedTime = await contract2.methods
        .getLockedUntil(user.user.walletAddress)
        .call();
      setLockedTime(lockedTime);
    }

    fetchLockedTime();
  }, [
    /* 필요한 의존성 배열을 여기에 추가하세요 (만약 필요하다면) */ selectedSongId,
  ]);

  useEffect(() => {
    if (lockedTime !== null) {
      const currentTime = Math.floor(Date.now() / 1000);
      setIsLocked(lockedTime > currentTime);
    }
  }, [lockedTime]);

  const spaceDownFunc = (event) => {
    if (event.keyCode === 32 && !clicked) {
      clicked = true;
      document.getElementsByClassName("main-control")[0].click();
    }
  };
  const spaceUpFunc = (event) => {
    if (event.keyCode === 32 && clicked) {
      clicked = false;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", spaceDownFunc);
    document.addEventListener("keyup", spaceUpFunc);
  }, [selectedSongId, songs]);

  if (selectedSongId < 0 || selectedSongId > songs.length - 1) {
    selectSongById(0);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 500;
    }
  }, [volume]);

  const onMusicPlay = async (e) => {
    e.preventDefault();

    if (!playerState) {
      audioRef.current.play();
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
      console.log(selectedSongId);

      nftData.tokenId = selectedSongId;
      songOwnerSender(nftData.tokenId);
      console.log(nftData.receiver_address.toLowerCase());
      console.log(user.user.walletAddress.toLowerCase());

      if (
        nftData.receiver_address.toLowerCase() ===
          user.user.walletAddress.toLowerCase() ||
        isLocked
      ) {
        // 만약 주소가 일치하면 함수를 중지합니다.
        return;
      } else {
        axios({
          url: `https://schoolnftproject.com:3001/api/play-transaction`,

          // url:`http://localhost:3001/api/play-transaction`,
          method: "POST",
          data: {
            receiver_address: nftData.receiver_address,
            amount: nftData.amount,
            tokenId: nftData.tokenId,
            // signKey:"",
            clientId: user.user._id,
          },
          withCredentials: true,
        }).catch((error) => {
          if (error.response.status == 500) {
            message.error("Transaction is locked");
          } else {
            message.error("미확인오류");
            console.log(error);
          }
        });
      }
    } else {
      audioRef.current.pause();
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    }
  };

  const onBackwardClick = () => {
    if (selectedSongId > 0) {
      selectSongById(selectedSongId - 1);
    }
  };
  const onForwardClick = () => {
    if (selectedSongId < songs.length - 1) {
      selectSongById(selectedSongId + 1);
    }
  };

  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });

    audioRef.current.play();
    document.getElementById("focus-link").click();
  }, [selectedSongId, dispatch]);

  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    audioRef.current.pause();
  }, [dispatch]);

  return (
    <div id="player">
      <SongTime />
      <div className="control" onClick={onBackwardClick}>
        {backwardsSvg}
      </div>
      <div className="main-control control" onClick={onMusicPlay}>
        <i className={`fas fa-${playerState ? "pause" : "play"}-circle`}></i>
      </div>
      <div className="control" onClick={onForwardClick}>
        {forwardsSvg}
      </div>

      <audio
        id="main-track"
        controls
        src={src}
        preload="true"
        onEnded={() => {
          selectSongById(
            shuffled
              ? Math.round(Math.random() * songs.length)
              : selectedSongId + 1
          );
        }}
        onLoadedMetadata={() => {
          dispatch({
            type: "SET_DURATION",
            payload: audioRef.current.duration,
          });

          setInterval(() => {
            dispatch({
              type: "SET_CURRENT_LOCATION",
              payload: audioRef.current.currentTime,
            });
          }, 1000);
        }}
        ref={audioRef}
        hidden
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    // defaultSong:state.songs.songs[0],
    playerState: state.playerState,
    // songs: state.songs,
    volume: state.volume,
    nftData: state.nftData,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectSongById,
  setNftData,
})(Player);
