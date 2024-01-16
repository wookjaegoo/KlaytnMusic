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
    } catch (error) {}

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

  return <React.Fragment>{authentifier()}</React.Fragment>;
}

export default Profile;
