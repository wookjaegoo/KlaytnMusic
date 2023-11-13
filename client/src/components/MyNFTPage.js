import React, { useState, useEffect } from 'react';
import "./MyNFTPage.css";
import axios from 'axios';
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
                if ("0xb6484d8e4974509c0e33d67ede1e5750d447c242" === ownerAddress.toLowerCase()) {
                    const Writer = await contract.methods.tokenURI(i).call();
                    const response = await fetch(Writer);

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    let nfts = await response.json();


                    if (nfts.url === null || nfts.url === '') {
                        setAdminNFTid(i);
                        return;

                    } else {
                        continue;
                    }


                }


            }
        } catch (error) {
            console.error('Error fetching owner address:', error);
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


                    if (songs.url === null || songs.url === '') {

                        setUserNFT(songs.links.images[1].url);
                        handlePublishNFT();
                        setUserNFTid(i)
                        return;


                    } else {
                        continue;
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching owner address:', error);
            throw error;
        }
    }


    useEffect(() => {
        // useEffect를 활용하여 컴포넌트가 렌더링된 후에 getOwnerNFT 함수 실행
        getOwnerNFT();
        getAdminNFT();

    }, [AdminNFTid]); // 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 얻은 결과를 출력
    // console.log('Owner Address:', UserNFT);

    useEffect(() => {
        // hasPublishedNFT 값이 변경될 때 이미지를 다시 렌더링
        // 여기서 필요에 따라 이미지 로딩 등의 로직을 추가할 수 있습니다.
        visibleImage()
    }, [hasPublishedNFT]);




    const handlePublishNFT = () => {
        if (!hasPublishedNFT) {
            // NFT를 발행하는 로직을 추가합니다.
            // 발행이 성공하면 setHasPublishedNFT(true)를 호출합니다.
            setHasPublishedNFT(true);

        }
    };

    function rotateBox() {
        const box = document.querySelector('.randomboxlogo');
        box.classList.add('rotated');
        changeOwnership();

        setTimeout(() => {

            setTimeout(visibleImage, 1000); // handlePublishNFT 실행 후 3초 뒤에 visibleImage 함수를 호출합니다.

        }, 3000); // 3초 후에 실행됩니다.

    }

    function visibleImage() {
        const box = document.querySelector('.randomnftlogo');
        if (box) {
            box.classList.add('visible');
        } else {
            console.error('Element with class "randomnftlogo" not found.');
        }
    }

    async function changeOwnership() {
        try {
            const response = await axios.post(
               
                'https://3.37.50.239/3001/api/change-ownership',
                // 'http://localhost:3001/api/change-ownership',
                {
                    receiver_address: user.walletAddress,
                    tokenId: AdminNFTid,
                },
                {
                    withCredentials: true,
                }
            );

            // 성공적인 응답 처리
            console.log(response.data);
            // 추가로 원하는 작업 수행 가능
        } catch (error) {
            // 에러 처리
            if (error) {
                console.log(error);
                message.error('Transaction is locked');
            } else {
                message.error('미확인 오류');
            }
        }
    }









    return (
        <div className='mynftpageContainer' >
            <div className='mynftpage open'>
                {/* MY NFT 페이지 내용을 작성하세요 */}

                <div className="content">
                    <h1>MY NFT Page</h1>


                    {hasPublishedNFT
                        ? (
                            <div className='randomnftlogobox' >
                                <img className='randomnftlogo' src={UserNFT} />
                                <div>
                                    {/* 아래는 이미지의 URL입니다. */}
                                    <button className="mypage--submit" width={'70%'}
                                    onClick={() => window.open(`https://testnets.opensea.io/assets/baobab/0x8c2f28afe28d208d153283355d855c7f2a73dc62/${UserNFTid}`)}>YOUR NFT INFO</button>
                               

                                </div>
                            </div>
                            
                        )
                        : (
                            <div>
                                <img className='randomboxlogo' src="randomboxlogo.png" alt="randomboxlogo" />
                                {/* <div>
                                <input
                                    type="file"
                                    id="input-image"
                                    accept="image/*"
                                    onChange={changeOwnership}
                                    style={{ display: "none" }}
                                />
                                <label for="input-image" className='custom-btn' style={{ color: 'black' }}>UPLOAD IMAGE</label>
                                    </div> */}
                            </div>

                        )
                    }




                    {!hasPublishedNFT && <button className="mypage--submit" onClick={() => { rotateBox(); }}>RANDOM NFT!</button>}




                </div>


            </div>
        </div>
    );
}

export default MyNFTPage;
