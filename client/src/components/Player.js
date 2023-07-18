import "./Player.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg, shuffleSvg } from "../svg";
import { setPlayerState, selectSongById,setNftData } from "../actions";
import Progress from "./ProgressBar";
import SongTime from "./SongTime";
import caver from "../klaytn/caver";
import axios from "axios"


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
    web3,
    nftData
}) => {

    //대안임 이함수는 solidity에서 ㄴ정의한 transfer이하의 setaddr 이하메소드가 
    //처음 트랜잭션을 진행하는 계정에 대해서는 진행이 안되는 문제가있음
    //hashed트랜잭션도 마찬가지고 unsigned트랜잭션도 마찬가지인데 전자함수 nonce를 바꾸면 해결이될지도
    //이런식의 메소드를 쓰면 존나 조잡해짐 오류가 많아진다고
    const dispatch = useDispatch();
    const [shuffled, setShuffled] = useState(false);
    const audioRef = useRef();
    let clicked = false;

    // if(songs[selectedSongId] !== 'undefined' && songs[selectedSongId] != null)
    // {
    //      src= songs[selectedSongId].url;      
    // }

    if(songs.songs !== 'undefined' && songs.songs != null)
    {
         src= songs.songs[selectedSongId].url;      
    }

    const songOwnerSender =async (tokenId) =>
    {
      const owner_Address = await contract.methods.owner(tokenId).call();  
      nftData.receiver_address=owner_Address;
      dispatch({ type: "SET_NFT_DATA", payload:nftData });
   
    }

    useEffect(()=>{
        
        if(songs.songs !== 'undefined' && songs.songs != null)
        {    
          nftData.tokenId=selectedSongId
          songOwnerSender(nftData.tokenId)
          dispatch({ type: "SET_NFT_DATA", payload:nftData });

          //개인키 넘겨주는 로직만 남음 토큰 개수는 일단보류 7/18
        }
    
    },[selectedSongId])


    // if(songs.songs !== 'undefined' && songs.songs != null)
    // {
    //      src= songs.songs[selectedSongId].url;      
    // }


    

  

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

            //여기서 axios 로직 7/9
            console.log( selectedSongId)
           
            axios({
                url:`http://localhost:3001/api/play-transaction`,
                method:"POST",
                data:{
                    receiver_address:nftData.receiver_address,
                    amount:nftData.amount,
                    tokenId:nftData.tokenId,
                    signKey:"0x76525b538ac7d3e002b58084ba19e4b5b6a6d85160bcef807cf3cdd0245061ef"
                },
                withCredentials:true,
            }).catch((error)=>
            {
                console.log(error)
            })
            //  const txobject=caver.abi.encodeFunctionCall(
            //     {
            //         "inputs": [
            //           {
            //             "internalType": "address",
            //             "name": "to",
            //             "type": "address"
            //           },
            //           {
            //             "internalType": "uint256",
            //             "name": "value",
            //             "type": "uint256"
            //           },
            //           {
            //             "internalType": "address",
            //             "name": "_counter",
            //             "type": "address"
            //           },
            //           {
            //             "internalType": "uint256",
            //             "name": "_tokenId",
            //             "type": "uint256"
            //           }
            //         ],
            //         "name": "sendTransaction",
            //         "outputs": [],
            //         "stateMutability": "nonpayable",
            //         "type": "function"
            //       }
            //     ,["0x500425D26A121c9b1Ad64343f9651B3f70937C3b",100000000000000,contract._address,1])
            //  console.log(txobject)
            //  const tx=caver.transaction.smartContractExecution.create({
            //     from:account[0],
            //     to: contract2._address,
            //     input:txobject,
            //     gas: 1000000000,
            //  })
            //  console.log(tx)

            //  let test=await caver.wallet.sign(account[0],tx);
            //  console.log(test)
            //  const encoded=tx.getRLPEncoding();
            //  console.log(encoded)
            //  caver.rpc.klay.sendRawTransaction(test).then(console.log);
             //메타마스크 사인과정 없이 보내는 로직 wallet keyring add과정이 필수불가결함



            //  const output = await contract2.methods.sendTransaction("0x6b8382F08b33B95e89D315AFd7fB8ddD31408332",100000000000000,contract._address,1).send({from:account[0], gas: 1000000000});
            // console.log(output)

            //const isexist1=await contract2.methods.playerList(1).call();
            //console.log(isexist1);
            

           
         
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
        nftData:state.nftData
    };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById,setNftData })(
    Player
);
