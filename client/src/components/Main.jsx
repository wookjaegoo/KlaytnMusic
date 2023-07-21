import React from "react";
import SongDetail from "./SongDetail";
import SongListHeader from "./SongListHeader";
import SongList from "./SongList";
// import songs from "../data/songs.json"
import useEth from "../contexts/EthContext/useEth";



function Main( {user,contract,songs})
{
  

  
  //오류안난상태에서 songs넘기면 렌더링 되는데 새로고침하면 오류난다.
  //usestate렌더링이 먼저 되어서 null받는거같음 그냥 그래서 props로 넘겨주는게 맞는듯
  //songdetail 은 {{songs}}로 prop주면 오류안남 근데 songlist가 지랄중 ㅋㅋ
  //그냥 컨트랙트 다시 배포해보고 0번 1번 제대로 찍어서 실험해봐야할듯 json id 때문에 생기는걸수도잇음
  

// const{state: {songs} } = useEth();


     return(
    <React.Fragment>
    
            <SongListHeader />
            <SongList songs={songs} contract={contract} user={user}/>
            <SongDetail songs={{songs}} />
            {/* <Player /> */}
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>  
          
    </React.Fragment>
    );
}

export default Main;