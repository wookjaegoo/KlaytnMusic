import React from "react";
import "./App.css";
// import "./Loading.css"

import Player from "./components/Player";
// import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
// import songs from "./data/songs.json"
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Layout, message, Spin } from "antd";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Topchart from "./components/Topchart";
import ClientSignup from "./components/ClientSignUp";
import SignIn from "./components/SignIn";
import Mypage from "./components/Mypage";
import Home from "./components/Home";
import NavBarmobile from "./components/NavBarmobile";

const fs = require("fs");
const path = require("path");

function App() {
  const [songs, updateSong] = useState();
  const [sortedSongs, sortSong] = useState();

  const [user, setUser] = useState({});
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [Loadpage, setLoadpage] = useState(true);

  // const location = useLocation();
  const { Sider } = Layout;
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  }, []);

  const callApi = async () => {
    axios
      .get("https://schoolnftproject.com/api")

      // axios.get("http://localhost:3001/api")
      .then((res) => {
        console.log(res.data.test);
      })
      .catch((error) => {
        console.error("요청실패", error);
      });
    // axios.get("http://localhost:3001/api/play-transaction")
    axios
      .get("https://schoolnftproject.com/api/play-transaction")

      .then((res) => {
        console.log(res.data.test);
      })
      .catch((error) => {
        console.error("요청실패", error);
      });
    axios
      .get("https://schoolnftproject.com/api/songList")
      .then((res) => {
        updateSong(res.data);
        const output = res.data;
        topSong(output);
        console.log(sortedSongs);
        console.log(songs);
      })
      .catch((error) => {
        console.error("요청실패", error);
      });
  };
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // 예시 값, 모바일 화면 크기 조정 가능
  };

  useEffect(() => {
    callApi();
  }, [type]);

  const topSong = async (param) => {
    const sortedSongs = param
      .slice()
      .sort((a, b) => b.listenCount - a.listenCount);
    const updatedSongs = sortedSongs.map((song, index) => {
      return { ...song, index }; // 해당 객체의 index 프로퍼티를 갱신하여 반환
    });
    sortSong(updatedSongs);
  };

  useEffect(() => {
    axios({
      url: `https://schoolnftproject.com:3001/api/accesstoken`,

      // url: `http://localhost:3001/api/accesstoken`,
      method: "GET",
      withCredentials: true,
    })
      .then((data) => {
        setType(data.data.type || "");
        setUser(data.data.user || {});
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);
  useEffect(() => {});

  const logout = () => {
    setIsLoading(true);
    axios({
      url: `https://schoolnftproject.com:3001/api/logout`,

      // url: `http://localhost:3001/api/logout`,
      method: "POST",
      withCredentials: true,
    })
      .then(() => {
        message.info("로그아웃 되었습니다.");
        setType("");
        setUser({});
        navigate("/");
        setIsLoading(false);
      })
      .catch(() => {
        message.error("로그아웃 실패");
        setIsLoading(false);
      });
  };

  // 가정: 데이터를 비동기적으로 불러오는 함수 (예를 들어, API 호출)
  const fetchData = () => {
    // 비동기 작업 시간을 가정하여 setTimeout 사용
    setTimeout(() => {
      setLoadpage(false); // 데이터를 모두 불러왔을 때 isLoading을 false로 변경
    }, 2000); // 2초 동안 로딩 화면을 유지
  };

  // 컴포넌트가 마운트되면 fetchData 함수를 실행 (처음 로딩 시 데이터 불러오기)
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 로드될 때만 실행

  const {
    state: { contract, account, contract2 },
  } = useEth();
  //백에서 songs던지는 로직으로 수정 7/17

  return (
    <React.Fragment>
      {/* <Remoter />    */}

      {Loadpage ? (
        <div className="Loading" style={{ background: "black" }}>
          <img src="newlogo.png"></img>
          <div>
            <p color="white"></p>
            <p color="white">Verax</p>
            <p color="white">Your Time Is Priceless</p>
          </div>
        </div>
      ) : (
        // isLoading이 false일 때 내용을 표시
        <React.Fragment>
          <NavBar logout={logout} type={type} />
          {isMobile && <NavBarmobile logout={logout} type={type} />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/SignIn"
              element={
                <SignIn type={type} setType={setType} setUser={setUser} />
              }
            />
            <Route path="/Register" element={<ClientSignup />} />
            <Route
              path="/Topchart"
              element={
                <Topchart songs={sortedSongs} contract={contract} user={user} />
              }
            />
            <Route path="/Footer" element={<Footer user={{ user }} />} />
            <Route
              path="/chart"
              element={
                <Main
                  user={user}
                  contract={contract}
                  songs={songs}
                  contract2={contract2}
                />
              }
            />
            {/* <Route path='/Profile' element={<Profile />} /> */}
            <Route
              path="/mypage"
              element={
                <Mypage
                  type={type}
                  contract2={contract2}
                  user={user}
                  contract={contract}
                />
              }
            />
          </Routes>
          <Player
            songs={{ songs }}
            contract={contract}
            account={account}
            contract2={contract2}
            user={{ user }}
          />
          <a href="#focused" id="focus-link" hidden>
            Go to playing element
          </a>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
