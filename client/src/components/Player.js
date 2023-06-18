import "./Player.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg, shuffleSvg } from "../svg";
import { setPlayerState, selectSongById } from "../actions";
import Progress from "./ProgressBar";
import SongTime from "./SongTime";


var src=''

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
    web3
}) => {

    //대안임 이함수는 solidity에서 ㄴ정의한 transfer이하의 setaddr 이하메소드가 
    //처음 트랜잭션을 진행하는 계정에 대해서는 진행이 안되는 문제가있음
    //hashed트랜잭션도 마찬가지고 unsigned트랜잭션도 마찬가지인데 전자함수 nonce를 바꾸면 해결이될지도
    //이런식의 메소드를 쓰면 존나 조잡해짐 오류가 많아진다고
    const dispatch = useDispatch();
    const [shuffled, setShuffled] = useState(false);
    const audioRef = useRef();
    let clicked = false;
    console.log()

    if(songs.songs !== 'undefined' && songs.songs != null)
    {
         src= songs.songs[selectedSongId].url;      
    }

    
//     if(songs[selectedSongId] !== 'undefined' && songs[selectedSongId] != null)
//   {
//        src= songs[selectedSongId].url;      
//   }

  if(songs.songs !== 'undefined' && songs.songs != null)
  {
       src= songs.songs[selectedSongId].url;      
  }

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
    }, [selectedSongId,songs]);

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
            // const output = await contract2.methods.approve(account[0],1000000000000000).send({from:account[0], gas: 10000000});

            const output = await contract2.methods.sendTransaction("0x6b8382F08b33B95e89D315AFd7fB8ddD31408332",100000000000000,contract._address,1).send({from:account[0], gas: 1000000000});
            console.log(output)
            
            //const isexist1=await contract2.methods.playerList(1).call();
            //console.log(isexist1);
            

            //const isexist2=await contract2.methods._exists(isexist1).call({from:accounts[0]});
            //console.log(isexist2);
           // var hash=await contract2.methods.transferTimeLockedTokensAfterTimePeriod("0x9419a21D360493f35452F65b58127f6AFa630cCb",10000000000000,1).send({from:accounts[0]});
           // console.log(hash);

        //    var i=""
        //     for(i=0; i<10; i++)
        // {

        //     try{
        //         contract2.methods.playerList(i).call();
                
        //     }
        //     catch (err) {
        //         console.log(i);
        //         return i;
                
        //       }
        // }

           
         
        //   initTransaction(accounts);
        // 불완전하긴한데.. 아까꺼보다 호ㅝㄹ씬나음 playerlist for문 돌려서 msg.sender가 보낸거랑 일치하는 인덱스 리턴시키고
        // 그 index transfertoken~ 함수에 파라미터로 박아라. 그러면 가능 지금 timelock 된거 확인햇음
        // 그리고 되는함수 player list뿐임 내가원한건 상태변수 player 숫자 리턴받고 그 숫자를 playerlist에 넣는건데..
        // player 상태변수를 리턴하는건 다시해야함 <<transaction count느낌이지 그변수로 대체해도될거같고..
        // 9/4 여기까지하자

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
        // tryInit();
        // console.log(audioRef.current.duration);
        document.getElementById("focus-link").click();
        window.history.pushState({}, "", "/");

    }, [selectedSongId, dispatch,]);

    useEffect(() => {
        dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
        audioRef.current.pause();
    }, [dispatch]);

    return (
        <div id="player">
            <SongTime />
            <div
                className="control"
                id={shuffled ? `active` : null}
                onClick={() => {
                    setShuffled(!shuffled);
                    // console.log("shuffle: " + !shuffled);
                }}
            >
                {shuffleSvg}
            </div>
            <div className="control" onClick={onBackwardClick}>
                {backwardsSvg}
            </div>
            <div className="main-control control" onClick={onMusicPlay}>
                <i
                    className={`fas fa-${
                        playerState ? "pause" : "play"
                    }-circle`}
                ></i>
            </div>
            <div className="control" onClick={onForwardClick}>
                {forwardsSvg}
            </div>
            <Progress />
            

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
        // defaultSong: state.songs[0],
        playerState: state.playerState,
        // songs: state.songs,
        volume: state.volume,
    };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(
    Player
);
