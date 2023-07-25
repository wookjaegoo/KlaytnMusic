import { useState,useEffect} from "react";
import "./SongItem.css";
import { connect, useDispatch } from "react-redux";
import { selectSong,setNftData } from "../actions";
import axios from "axios";
import { message } from "antd";

const SongItem = ({ song, index, selectSong, selectedSongId, playerState, nftData,contract,user}) => {
    const [, setHovered] = useState(false);
    const dispatch = useDispatch();

    const selector = () => {
        return (
            <a draggable="false" href={song.url}>
                <svg
                    role="img"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    className="download-link"
                >
                    <path
                        d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
                        fill="currentColor"
                    ></path>
                </svg>
            </a>
        );
    };

    // Set song as active
    const now_selected = selectedSongId === song.id ? "active" : "";


    const songOwnerSender =async (tokenId) =>
    {
        if(tokenId!=='undefined')
        {
            const owner_Address = await contract.methods.owner(tokenId).call();  
            nftData.receiver_address=owner_Address;
            dispatch({ type: "SET_NFT_DATA", payload:nftData });
        }
    }
    
    

    useEffect(()=>{
    
        if(song !== 'undefined' && song != null)
        {       
          nftData.tokenId=selectedSongId
          songOwnerSender(nftData.tokenId)
        //   console.log(nftData)
          dispatch({ type: "SET_NFT_DATA", payload:nftData });

          //개인키 넘겨주는 로직만 남음 토큰 개수는 일단보류 7/18
        
        }
    
    },[selectedSongId,user,dispatch])


    // set the gif
    const phaser = () => {
        if (selectedSongId === song.id && playerState) {
            return (
                <div className="index">
                    <img
                        alt=""
                        src="/playing.gif"
                        id="focused"
                        className="small-icon"
                    />
                </div>
            );
        } else {
            return <div className="index">{index }</div>;
        }
    };
    return (
        <div
            className={`song-item`}
            id={now_selected}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                selectSong(song);
                //노래 songitem클릭하면 시작하는 부분 player.js의 play버튼과 똑같은부분 여기서도 tr처리해주어야함
                
                dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
                axios({
                    url:`http://localhost:3001/api/play-transaction`,
                    method:"POST",
                    data:{
                        receiver_address:nftData.receiver_address,
                        amount:nftData.amount,
                        tokenId:nftData.tokenId,
                        // signKey:"0xad14c45bac1c614a3bafabd4ff3a092e1a888a574990bfbb0621f919e2be8f56",
                        clientId:user.user._id

                    },
                    withCredentials:true,
                }).catch((error)=>
                {
                    if (error.response.status) {
                        message.error("Transaction is locked");
                      } else {
                        message.error("미확인오류");
                      }    
                })
                

            }}
        >
            {phaser()}
            <div className="name">{song.name}</div>
            <div className="author">{song.author}</div>
            {/* <div className="selector">{selector()}</div> */}
            <div>HowManyListen:{song.listenCount}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        playerState: state.playerState,
        nftData:state.nftData
    };
};

export default connect(mapStateToProps, { selectSong,setNftData })(SongItem);
