import React from "react";
import "./App.css";
import Player from "./components/Player";
// import Remoter from "./components/Remoter";
import useEth from "./contexts/EthContext/useEth";
// import songs from "./data/songs.json"
import axios from "axios";
import { useEffect,useState } from "react";
import { Link, useNavigate,BrowserRouter,Route,Routes} from "react-router-dom";
import { Layout, message, Spin } from "antd";

import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Main from './components/Main';
import Profile from './components/Profile'
import Topchart from './components/Topchart';
import ClientSignup from './components/ClientSignUp';
import SignIn from './components/SignIn';


function App() {
  
  const [songs, updateSong] = useState();

  
    
  const [user, setUser] = useState({});
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const location = useLocation();
  const {Sider } = Layout;

  

  const navigate = useNavigate();
    


  const callApi = async()=>{
    axios.get("http://localhost:3001/api")
    .then((res)=>{console.log(res.data.test)})
    .catch(error=>{console.error('요청실패',error)});
    axios.get("http://localhost:3001/api/play-transaction")
    .then((res)=>{console.log(res.data.test)})
    .catch(error=>{console.error('요청실패',error)});
    axios.get("http://localhost:3001/api/songList")
    .then((res)=>{
      updateSong(res.data)
      console.log(songs)})
    .catch(error=>{console.error('요청실패',error)});
    
  };

  useEffect(()=>{
    callApi();
  }, [type]);


    useEffect(() => {
        axios({
          url: `http://localhost:3001/api/accesstoken`,
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
      url: `http://localhost:3001/api/logout`,
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
  

  const{state: {contract,account,contract2} } = useEth();
  //백에서 songs던지는 로직으로 수정 7/17

  return (
    <React.Fragment>
      {/* <Remoter />    */}      
      <NavBar logout={logout} type={type}/>
        <Routes>
        <Route path='/SignIn' element={<SignIn type={type} setType={setType} setUser={setUser}/>} /> 
        <Route path='/Register' element={<ClientSignup/>} /> 
          <Route path='/Topchart' element={<Topchart />} /> 
          <Route path='/Footer' element={<Footer/>}/> 
          <Route path='/' element={<Main user={user} contract={contract} songs={songs}/>}/>
          <Route path='/Profile' element={<Profile />}/>
        </Routes>

      <Player songs={{songs}} contract={contract} account={account} contract2={contract2} user={{user}}/>
    </React.Fragment>
    
  );
}

export default App;
