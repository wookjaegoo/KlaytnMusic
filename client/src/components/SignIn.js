import { Row, Col, message, Radio, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SignIn = ({ type, setType, setUser }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signinObj, setSigninObj] = useState({
    email: "",
    password: "",
  });
  type = "client";

  const onchange = (e) => {
    signinObj[e.target.id] = e.target.value;
    setSigninObj(signinObj);
  };

  const signinelement = document.querySelector(
    "#root > div.Deploys > div > div > div > div "
  );
  const signinbox = document.querySelector(
    "#root > div.Deploys > div > div > div > div > div"
  );

  if (signinelement) {
    signinelement.style.display = "flex";
    signinelement.style.justifyContent = "center";
    signinelement.style.width = "100%";
  }
  if (signinbox) {
    signinbox.style.marginInlineStart = "0%";
  }

  const messageInfo = (msg) => {
    message.success(msg);
  };

  const messageError = (msg) => {
    message.error(msg);
  };

  const signin = () => {
    if (signinObj.email === "") {
      message.error("아이디를 입력해주세요.");
    } else if (signinObj.password === "") {
      message.error("비밀번호를 입력해주세요.");
    } else {
      // login
      axios({
        url: `https://schoolnftproject.com:3001/api/login-client`,
        method: "POST",
        data: {
          email: signinObj.email,
          password: signinObj.password,
        },
        withCredentials: true,
      })
        .then((data) => {
          axios({
            url: `https://schoolnftproject.com:3001/api/accesstoken`,
            method: "GET",
            withCredentials: true,
          })
            .then((userObj) => {
              const userData = JSON.stringify({
                _id: userObj.data.user._id,
                email: userObj.data.user.email,
                walletAddress: userObj.data.user.walletAddress,
                name: userObj.data.user.name,
                type: userObj.data.type,
              });
              setUser(JSON.parse(userData));
              setType(userObj.data.type);
              navigate("/");
              messageInfo("로그인 성공!");
              setIsLoading(false);
            })
            .catch((err) => {
              console.log(err);
              messageError("로그인 실패!!");
              setIsLoading(false);
            });
        })
        .catch(() => {
          message.error("가입정보가 틀립니다.");
          setIsLoading(false);
        });
    }
  };

  const isEnter = (e) => {
    if (e.keyCode === 13) {
      signin();
    }
  };
  return (
    <div className="Deploys" style={{ background: "white" }}>
      <div className="signin">
        <Spin tip="로딩중..." size="large" spinning={isLoading}>
          <Row>
            <Col span={12} offset={7}>
              <div className="signin--right">
                <div className="signin--canvas">
                  <span className="signin--title">🔐 로그인</span>

                  <input
                    type="text"
                    className="signin--id"
                    placeholder="EMAIL"
                    onChange={onchange}
                    id="email"
                  />
                  <input
                    type="password"
                    className="signin--id"
                    placeholder="PASSWORD"
                    onChange={onchange}
                    id="password"
                    onKeyDown={isEnter}
                  />
                  <Row style={{ margin: "10px 0px" }}>
                    <Col span={30} style={{ fontWeight: 700 }}>
                      <Link to="/Register">회원이 아니신가요?</Link>
                    </Col>
                  </Row>
                  <button className="signin--signinbtn" onClick={signin}>
                    로그인
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Spin>
      </div>
    </div>
  );
};

export default SignIn;
