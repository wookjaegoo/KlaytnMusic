import React, { useEffect } from "react";
import "./Profile.css";
import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";

function Profile() {
  const [imageUrl, updateImageUrl] = useState("");
  const [imageUrl2, updateImageUrl2] = useState("");
  const [value, setValue] = useState("");
  const [isexist, setExist] = useState(false);
  const {
    state: { contract, accounts, web3 },
  } = useEth();

  const formData = [
    { id: 1, name: "경력증명서" },
    { id: 2, name: "장애인증명서" },
  ];
  const [isChecked, setisChecked] = useState(false);
  const [checkeditems, setCheckeditems] = useState(new Set());

  const checkHandler = ({ target }) => {
    console.log(target);
    setisChecked(!isChecked);
    checkeditemHandler(target.value, target.checked);
  };

  const checkeditemHandler = (id, isChecked) => {
    if (isChecked) {
      checkeditems.add(id);
      setCheckeditems(checkeditems);
    } else if (!isChecked && checkeditems.has(id)) {
      checkeditems.delete(id);
      setCheckeditems(checkeditems);
    }

    return checkeditems;
  };

  useEffect(() => {
    numberCheck(value);
  }, [value]);

  const onChange = (e) => {
    numberCheck(e.target.value);
  };

  const numberCheck = (v) => {
    let num = v;
    if (isFinite(num)) setValue(num);

    if (!num.includes(".")) {
      num = num.replace(/^0+/, "");
    }
  };

  async function onChange2(e) {
    try {
      const Writer = await contract.methods.tokenURI(value).call();
      const response = await fetch(Writer);
      if (!response.ok) throw new Error(response.statusText);
      const json1 = await response.json();
      let autsrc = json1.links.images[0];
      updateImageUrl(autsrc);
      updateImageUrl2(json1.links.images[1]);

      if (autsrc.url.length > 0 || json1.links.images[1].length > 0) {
        setExist(true);
      }
    } catch (error) {
      //일단 증명서 업로드 된거 확인했고 선택해서 볼수있게끔 코딩하고 개인정보 세부사항에 대해 어떻게 할지 생각해보자
      //이미지 인식해서 정보들 파싱하는 툴있으면 그거 사용해서 개인정보 원하는거만 리턴하게끔 하면 최고임
    }

    authentifier();
  }

  function authentifier() {
    return (
      <div className="Profile">
        {!isexist && (
          <div className="Authentication">
            <h1>인증서확인</h1>
            <label>토큰번호입력</label>

            <div style={{ textAlign: "center" }}>
              <input
                type="number"
                value={value}
                onChange={onChange}
                style={{ width: "50px", textAlign: "center" }}
              ></input>

              <br />
              <div>
                {formData.map((item) => (
                  <label style={{ display: "inline-block" }}>
                    <input
                      type="checkbox"
                      value={item.name}
                      key={item.id}
                      onChange={(e) => checkHandler(e)}
                    ></input>

                    <div>{item.name} &nbsp;</div>
                  </label>
                ))}
              </div>
              <button onClick={onChange2} style={{ width: "50px" }}>
                확인
              </button>

              <br />
            </div>
          </div>
        )}

        {checkeditems.has("장애인증명서") && isexist && (
          <div
            className="Authentication2"
            style={{ backgroundImage: `url(${imageUrl.url})` }}
          >
            <img
              src={`https://chart.apis.google.com/chart?cht=qr&chs=100x100&chl=${imageUrl.url}`}
              style={{ marginBottom: "100%" }}
            ></img>
          </div>
        )}

        {checkeditems.has("경력증명서") && isexist && (
          <div
            className="Authentication3"
            style={{ backgroundImage: `url(${imageUrl2.url})` }}
          >
            <img
              src={`https://chart.apis.google.com/chart?cht=qr&chs=100x100&chl=${imageUrl2.url}`}
              style={{ marginBottom: "100%" }}
            ></img>
          </div>
        )}
      </div>
    );
  }

  //23/0101 추가할거 공증마크가 위변조 되어지지 않았다는것 그리고 pdf 혹은  png에서 원하는 정보 파싱하는거
  //후자부분은 표준화된 증명서가 있으면 가능할거같음 예시를들어서 내가 해야할 부분인거같다. 이거만 추가하면 완벽함

  return <React.Fragment>{authentifier()}</React.Fragment>;
}

export default Profile;
