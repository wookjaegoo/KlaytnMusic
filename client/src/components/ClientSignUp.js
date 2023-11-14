import "./ClientSignUp.css";
import { Row, Col, message, Select,Spin } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ClientSignup = () => {
  useEffect(() => {});
  useEffect(() => {}, []);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [clientInfo, setclientInfo] = useState({
    email: "",
    password: "",
    name: "",
    registNumber: "",
    requiredVC: "",
    desc: "",
    walletAddress: "",
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const onchange = (e) => {
    clientInfo[e.target.id] = e.target.value;
    setclientInfo(clientInfo);
  };
  const validate = async () => {
    if (clientInfo.email === "") {
      message.error("이메일을 입력해주세요.");
    } else if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        clientInfo.email
      )
    ) {
      message.error("이메일을 주소 형식을 확인해주세요.");
    } else if (clientInfo.password === "") {
      message.error("비밀번호를 입력해주세요.");
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(
        clientInfo.password
      )
    ) {
      message.error("비밀번호를 형식에 맞춰 정확히 입력해주세요.");
    } else if (!isCorrect) {
      message.error("비밀번호 확인이 일치하지 않습니다");
    } 
    // else if (!/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| |]+$/.test(clientInfo.name)) {
    //   message.error("기관명을 정확히 입력해주세요.");
    // } else if (clientInfo.registNumber === "") {
    //   message.error("사업자 등록번호를 입력해주세요.");
    // } 
    else {
      let res = await axios({
        
        url: `https://schoolnftproject.com:3001/api/register-client`,

        // url: `http://localhost:3001/api/register-client`,
        method: "POST",
        data: {
          email: clientInfo.email,
          password: clientInfo.password,
          name: clientInfo.name,
          // desc: clientInfo.desc,
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsLoading(false)
        message.info(res.data);
        navigate("/");
      }
    }
  };

  return (
    <div className="signup">
      <div className="issuersignup--name">회원 가입</div>
      <Spin spinning={isLoading}>
      <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          이메일
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="text"
            onChange={onchange}
            id="email"
          />
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={6}>
          <div className="validate--label">
            이메일 형식으로 입력해주세요. ex{")"}abc123@didnow.com
          </div>
        </Col>
      </Row>
      <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          비밀번호
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="password"
            onChange={onchange}
            id="password"
          />
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={6}>
          <div className="validate--label">
            8-20글자의 영어, 숫자, 특수문자 {"(~!@#$%^&*+)"}를 사용하여야합니다.
          </div>
        </Col>
      </Row>
      <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          비밀번호 확인
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="password"
            onChange={(e) => {
              return e.target.value === clientInfo.password
                ? setIsCorrect(true)
                : setIsCorrect(false);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={6}>
          <div className="validate--label">
            비밀번호를 동일하게 다시 입력해주세요.
          </div>
        </Col>
      </Row>
      <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          이름
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="text"
            onChange={onchange}
            id="name"
          />
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={6}>
          <div className="validate--label">
            한글 ,영어, 숫자를 사용해주세요.
          </div>
        </Col>
      </Row>
      {/* <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          사업자 등록번호
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="text"
            onChange={onchange}
            id="registNumber"
          />
        </Col>
      </Row> */}
      {/* <Row>
        <Col span={18} offset={6}>
          <div className="validate--label">사업자 등록번호를 입력해주세요.</div>
        </Col>
      </Row> */}
      {/* <Row className="issuersignup--row">
        <Col span={6} className="signup--col">
          기관소개
        </Col>
        <Col span={18}>
          <input
            className="issuersignup--input"
            type="text"
            onChange={onchange}
            id="desc"
          />
        </Col>
      </Row> */}
     
      <Row className="holdersignup--row">
        <Col span={6} style={{ display: "flex" }}>
          <span className="signup--label">지갑주소</span>
        </Col>
      </Row>
      <Row>
        <button className="signup--btn"  onClick={() => { validate(); setIsLoading(true);}}>
          가입 완료
        </button>
      </Row>
      </Spin>
    </div>
  );
};

export default ClientSignup;
