import { Breadcrumb, Row, Col, message, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Mypage.css";
import caver from "../klaytn/caver";


const Mypage = ({ type,contract2,user}) => {
  const [userAmount, setUserAmount] = useState({
    balance: 0,
    Vbalance:0,

  });

  const [pageTitle, setPageTitle] = useState("");
  const [requiredVC, setRequiredVC] = useState([]);
  const navigate = useNavigate();
  const requiredVCList = ["이메일", "지갑주소"];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      url: `http://localhost:3001/api/accesstoken`,
      method: "GET",
      withCredentials: true,
    })
      .then((data) => {
        if (data.data.type === "client") {
          setPageTitle(data.data.user.title);
        
        }
        
        // setUser({
        //   ...data.data.user,
        //   password: "",
        // });

        setIsLoading(false);

      })
      .catch(() => {
        setIsLoading(true);
      });

      


  }, []);

  const onchange = (e) => {
    // setUser((prevUser) => {
    //   return {
    //     ...prevUser,
    //     [e.target.id]: e.target.value,
    //   };
    // });
  };

  const getBalance = async (addr) => {
    try {
      const bal = await caver.rpc.klay.getBalance(addr);
      const hexval = bal.toString();
      const decimal = parseInt(hexval, 16);
      const yourclay = await caver.utils.convertFromPeb(decimal, "KLAY");
  
      setUserAmount((prevUser) => ({
        ...prevUser,
        balance: yourclay,
      }));
  
      return yourclay;
    } catch (error) {
      console.error("잔액을 가져오는데 에러 발생:", error);
      throw error;
    }
  };

  const getVerax = async (addr) => {
    try {

      const amount= await contract2.methods.balanceOf(user.walletAddress).call();
      const yourvx=amount/(10**18);

      setUserAmount((prevUser) => ({
        ...prevUser,
        Vbalance: yourvx,
      }));
  
      return yourvx;
    } catch (error) {
      console.error("잔액을 가져오는데 에러 발생:", error);
      throw error;
    }
  };



  useEffect(() => {
    // 잔액을 가져오는 함수를 정의합니다.
    const fetchBalance = async () => {
      try {
        const yourclay = await getBalance(user.walletAddress);
        const yourvx= await getVerax(user.walletAddress)
       
      } catch (error) {
        console.error("잔액을 가져오는데 에러 발생:", error);
      }
    };
  
    // 컴포넌트가 처음 마운트될 때와 user.walletAddress가 변경될 때마다 fetchBalance 함수를 호출합니다.
    fetchBalance();
  }, [user.walletAddress]);
  


  // const updateInfo = (e) => {

  //   const userTitleRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]+$/;
  //   if (type === "issuer") {
  //     if (!userTitleRegex.test(user.title)) {
  //       message.error("기관명은 한글, 영어, 숫자로만 입력해주세요.");
  //     } else if (user.title.length < 1 || user.title.length > 20) {
  //       message.error("기관명은 1글자이상 20글자 이하로 해주세요.");
  //     }
  //     else {
  //       axios({
  //         url: `${process.env.REACT_APP_ISSUER}/${type.slice(
  //           0,
  //           3
  //         )}/api/${type}/${user._id}`,
  //         method: "PUT",
  //         data: {
  //           title: user.title,
  //         },
  //         withCredentials: true,
  //       }).then(() => {
  //         message.success("정보 수정 완료!");
  //         navigate("/home");
  //         navigate(0);
  //       });
  //     }
  //   }
  // };
  useEffect(( ) => {});
  const emailDOM = (
    <>
      <div className="mypage--DOM--title">이메일</div>
      <input
        className="mypage--input disabled"
        type="text"
        id="email"
        onChange={onchange}
        value={user.email}
        disabled
      />
    </>
  );
  const titleDOM = (
    <>
      <div className="mypage--DOM--title">기관명</div>
      <input
        className="mypage--input"
        type="text"
        id="title"
        onChange={onchange}
        value={user.title}
      />
      <div className="validate--label">
        기관명은 1글자 이상 20글자 미만의 영어, 한글, 숫자만 입력가능합니다.
      </div>
    </>
  );
  const nameDOM = (
    <>
      <div className="mypage--DOM--title">이름</div>
      <input
        className="mypage--input"
        type="text"
        id="username"
        onChange={onchange}
        value={user.username}
      />
      <div className="validate--label">
        이름은 1글자 이상 10글자 미만의 영어, 한글만 입력가능합니다.
      </div>
    </>
  );



  // 수정
  const walletAddressDOM = (
    <>
      <div className="mypage--DOM--title">지갑 주소</div>
      <input
        className="mypage--input disabled"
        type="text"
        id="walletAddress"
        onChange={onchange}
        value={user.walletAddress}
        disabled
      />
    </>
  );

  const klayAmountDom = (
    <>
      <div className="mypage--DOM--title">보유KLAY</div>
      <img src="smallklay.png"></img>
      <input
        className="mypage--input disabled"
        type="text"
        id="klayCount"
        onChange={onchange}
        value={userAmount.balance}
        disabled
      />
    </>
  );

  const VeraxAmountDom = (
    <>
      <div className="mypage--DOM--title">보유VERAX
      </div>      
      <img src="smallverax.png"></img>

      <input
        className="mypage--input disabled"
        type="text"
        id="VeraxCount"
        onChange={onchange}
        value={userAmount.Vbalance}
        disabled
      />
    </>
  );

  /*
  const passwordDOM = (
    <>
      <div>비밀번호</div>
      <input
        className="mypage--input"
        type="password"
        id="password"
        onChange={onchange}
        value={user.password}
      />
    </>
  );
  */


  const issuerDOM = [titleDOM, emailDOM,walletAddressDOM,klayAmountDom,VeraxAmountDom];

  return (
    <div className="Deploys"> 
    <div className="mypage">
      {/* <Breadcrumb className="mypage--breadcrumb" separator=">">
        <Breadcrumb.Item href="/">홈</Breadcrumb.Item>
        <Breadcrumb.Item href="/mypage">정보 수정</Breadcrumb.Item>
      </Breadcrumb> */}
      {/* <div className="mypage--description">{type}의 정보를 수정합니다.</div> */}

      <div className="mypage--form">
        <Spin spinning={isLoading} tip="로딩중..." size="large">
          <Row className="mypage--row">
            <Col span={20} offset={2}>
              <Row>
                <Col span={12} offset={6}>
                  <div className="mypage--title">
                    {/* {pageTitle} */}
                    마이페이지
                  </div>
                  <hr />
                  {type === ""
                    ? ""
                    
                    : type === "client"
                    ? issuerDOM.map((e, idx) => {
                        return (
                          <Row className="mypage--row" key={idx}>
                            {e}
                          </Row>
                        );
                      })
                    
                    : ""}
                  <hr style={{ margin: "30px 0 " }} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={9}>
              {/* <button className="mypage--submit" onClick={updateInfo}>
                정보 수정
              </button> */}
              <button className="mypage--submit" >
                정보 수정
              </button>
            </Col>
          </Row>
        </Spin>
      </div>
    </div>
    </div>
  );
};

export default Mypage;
