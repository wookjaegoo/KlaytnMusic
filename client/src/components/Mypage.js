import { Breadcrumb, Row, Col, message, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Mypage.css";
import caver from "../klaytn/caver";
import MyNFTPage from "./MyNFTPage";

const Mypage = ({ type, contract2, user, contract }) => {
  const [userAmount, setUserAmount] = useState({
    balance: 0,
    Vbalance: 0,
  });

  const [pageTitle, setPageTitle] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isMyNFTTabOpen, setIsMyNFTTabOpen] = useState(false);

  useEffect(() => {
    const mypageelements3 = document.querySelector(
      "#root > div.Deploys > div > div > div > div > div > div.ant-row.mypage--row.css-dev-only-do-not-override-1m62vyb > div > div > div"
    );
    const mypageelements = document.querySelector(
      "#root > div.Deploys > div > div > div > div > div > div.ant-row.mypage--row.css-dev-only-do-not-override-1m62vyb > div > div"
    );
    const mypageelements2 = document.querySelector(
      "#root > div.Deploys > div > div > div > div > div > div.ant-row.mypage--row.css-dev-only-do-not-override-1m62vyb > div"
    );
    const mypageelement4 = document.querySelector(
      "#root > div.Deploys > div > div > div > div > div > div.ant-row.mypage--row.css-dev-only-do-not-override-1m62vyb"
    );
    if (mypageelements) {
      mypageelements.style.width = "100%";
      mypageelements.style.display = "flex";
      mypageelements.style.justifyContent = "center";
      mypageelements.style.alignItems = "center";
    }
    if (mypageelements2) {
      mypageelements2.style.flex = "0 0 100%";
      mypageelements2.style.justifyContent = "center";
      mypageelements2.style.marginInlineStart = "0";
      mypageelements2.style.justifyContent = "center";
      mypageelements2.style.maxWidth = "100%";
    }
    if (mypageelements3) {
      mypageelements3.style.marginInlineStart = "0";
      mypageelements3.style.maxWidth = "100%";
      mypageelements3.style.width = "100%";
      mypageelements3.style.flex = "0 0 80%";
    }
    if (mypageelement4) {
    }

    return () => {};
  }, []);

  useEffect(() => {
    axios({
      url: `https://schoolnftproject.com/api/accesstoken`,

      method: "GET",
      withCredentials: true,
    })
      .then((data) => {
        if (data.data.type === "client") {
          setPageTitle(data.data.user.title);
        }

        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
  }, []);

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
      const amount = await contract2.methods
        .balanceOf(user.walletAddress)
        .call();
      const yourvx = amount / 10 ** 18;

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
    const fetchBalance = async () => {
      try {
        const yourclay = await getBalance(user.walletAddress);
        const yourvx = await getVerax(user.walletAddress);
      } catch (error) {
        console.error("잔액을 가져오는데 에러 발생:", error);
      }
    };

    fetchBalance();
  }, [user.walletAddress]);

  useEffect(() => {});
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
  const nameDOM = (
    <>
      <div className="mypage--DOM--title">이름</div>
      <input
        className="mypage--input"
        type="text"
        id="name"
        onChange={onchange}
        value={user.name}
      />
      <div className="validate--label">
        기관명은 1글자 이상 20글자 미만의 영어, 한글, 숫자만 입력가능합니다.
      </div>
    </>
  );

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
      <div className="mypage--DOM--title">KLAY</div>
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
      <div className="mypage--DOM--title">VERAX</div>
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

  const toggleMyNFTTab = () => {
    setIsMyNFTTabOpen(!isMyNFTTabOpen);
  };

  const issuerDOM = [
    nameDOM,
    emailDOM,
    walletAddressDOM,
    klayAmountDom,
    VeraxAmountDom,
  ];

  return (
    <div className="Deploys">
      {isMyNFTTabOpen && (
        <MyNFTPage contract={contract} user={user}></MyNFTPage>
      )}

      <div className="mypage">
        <div className="mypageContainer">
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
                  <button className="mypage--submit" onClick={toggleMyNFTTab}>
                    {isMyNFTTabOpen ? "NFT닫기" : "NFT열기"}
                  </button>
                </Col>
              </Row>
            </Spin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
