import React, { useState, useEffect } from "react";
import "./MyNFTPage.css";
import axios from "axios";
import { message } from "antd";

function MyNFTPage({ contract, user }) {
  const [hasPublishedNFT, setHasPublishedNFT] = useState(false);
  const [UserNFT, setUserNFT] = useState("");
  const [UserNFTid, setUserNFTid] = useState("");

  const [AdminNFTid, setAdminNFTid] = useState("");

  async function getAdminNFT() {
    const num = await contract.methods.totalSupply().call();

    try {
      for (let i = 0; i < num; i++) {
        const ownerAddress = await contract.methods.owner(i).call();
        if (
          "0xb6484d8e4974509c0e33d67ede1e5750d447c242" ===
          ownerAddress.toLowerCase()
        ) {
          const Writer = await contract.methods.tokenURI(i).call();
          const response = await fetch(Writer);

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          let nfts = await response.json();

          if (nfts.url === null || nfts.url === "") {
            setAdminNFTid(i);
            return;
          } else {
            continue;
          }
        }
      }
    } catch (error) {
      console.error("Error fetching owner address:", error);
    }
  }

  async function getOwnerNFT() {
    const num = await contract.methods.totalSupply().call();

    try {
      for (let i = 0; i < num; i++) {
        const ownerAddress = await contract.methods.ownerOf(i).call();

        if (user.walletAddress.toLowerCase() === ownerAddress.toLowerCase()) {
          const Writer = await contract.methods.tokenURI(i).call();
          const response = await fetch(Writer);

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          let songs = await response.json();

          if (songs.url === null || songs.url === "") {
            setUserNFT(songs.links.images[1].url);
            handlePublishNFT();
            setUserNFTid(i);
            return;
          } else {
            continue;
          }
        }
      }
    } catch (error) {
      console.error("Error fetching owner address:", error);
      throw error;
    }
  }

  useEffect(() => {
    getOwnerNFT();
    getAdminNFT();
  }, [AdminNFTid]);

  useEffect(() => {
    visibleImage();
  }, [hasPublishedNFT]);

  const handlePublishNFT = () => {
    if (!hasPublishedNFT) {
      setHasPublishedNFT(true);
    }
  };

  function rotateBox() {
    const box = document.querySelector(".randomboxlogo");
    box.classList.add("rotated");
    changeOwnership();

    setTimeout(() => {
      setTimeout(visibleImage, 1000);
    }, 3000);
  }

  function visibleImage() {
    const box = document.querySelector(".randomnftlogo");
    if (box) {
      box.classList.add("visible");
    } else {
      console.error('Element with class "randomnftlogo" not found.');
    }
  }

  async function changeOwnership() {
    try {
      const response = await axios.post(
        "https://schoolnftproject.com:3001/api/change-ownership",
        {
          receiver_address: user.walletAddress,
          tokenId: AdminNFTid,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      if (error) {
        console.log(error);
        message.error("Transaction is locked");
      } else {
        message.error("미확인 오류");
      }
    }
  }

  return (
    <div className="mynftpageContainer">
      <div className="mynftpage open">
        <div className="content">
          <h1>MY NFT Page</h1>

          {hasPublishedNFT ? (
            <div className="randomnftlogobox">
              <img className="randomnftlogo" src={UserNFT} />
              <div>
                {/* 아래는 이미지의 URL입니다. */}
                <button
                  className="mypage--submit"
                  width={"70%"}
                  onClick={() =>
                    window.open(
                      `https://testnets.opensea.io/assets/baobab/0x8c2f28afe28d208d153283355d855c7f2a73dc62/${UserNFTid}`
                    )
                  }
                >
                  YOUR NFT INFO
                </button>
              </div>
            </div>
          ) : (
            <div>
              <img
                className="randomboxlogo"
                src="randomboxlogo.png"
                alt="randomboxlogo"
              />
            </div>
          )}

          {!hasPublishedNFT && (
            <button
              className="mypage--submit"
              onClick={() => {
                rotateBox();
              }}
            >
              RANDOM NFT!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyNFTPage;
