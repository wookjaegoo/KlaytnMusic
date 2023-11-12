import React, { useState, useEffect } from 'react';
import "./MyNFTPage.css";
import { create } from 'ipfs-http-client'
import axios from 'axios';
import { message } from "antd";


let songimageurl = ""


const projectId = '2O93jmJXVU0vnrDtMUzuuvLiiIu';
const projectSecret = '5b3f1a4c745556778787fe752e3780e9';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const client2 = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});



function MyNFTPage({ contract, user }) {



    const [fileUrl, updateFileUrl] = useState("");

    const [hasPublishedNFT, setHasPublishedNFT] = useState(false);
    const [UserNFT, setUserNFT] = useState("")


    async function getOwnerNFT() {
        const num = await contract.methods.totalSupply().call();

        try {
            for (let i = 0; i < num; i++) {
                const ownerAddress = await contract.methods.owner(i).call();

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

    }, []); // 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 얻은 결과를 출력
    console.log('Owner Address:', UserNFT);

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
        // setTimeout(() => {

        //     // setTimeout(visibleImage, 1000); // handlePublishNFT 실행 후 3초 뒤에 visibleImage 함수를 호출합니다.

        // }, 3000); // 3초 후에 실행됩니다.

    }

    function visibleImage() {
        const box = document.querySelector('.randomnftlogo');
        if (box) {
            box.classList.add('visible');
        } else {
            console.error('Element with class "randomnftlogo" not found.');
        }
    }





    async function uploadImage(e) {
        const imageFile = e.target.files[0];

        try {
            const addedImage = await client2.add(imageFile);
            const url = `https://prnftmusic.infura-ipfs.io/ipfs/${addedImage.path}`;
            // 여기서 imageUrl을 사용하여 업로드 된 이미지를 활용할 수 있습니다.
            songimageurl = url;
            console.log(songimageurl)

            // 아래에 추가적으로 원하는 작업을 수행할 수 있습니다.
        } catch (error) {
            console.error('이미지 업로드 중 오류 발생: ', error);
        }
    }





    async function deployNFT(e) {

        const num = await contract.methods.totalSupply().call();
        //tokenid call function 임 등록할때는 num+1이겠지
        //근데 다수가 이 트랜잭션을 진행한다고 하면.. 같은 num으로 tr 발생하는 가능성이 존재해서 이걸 배제하려면 그냥 음원 자체의 tokenid를 파싱해서리스트에 박는게 나음
        try {
            let json = `{"name":"randomNft","author":"randomNft","url":"${fileUrl}","id":${num},
  "links":{
    "images":[
      {
        "url":""
      },
      {
        "url":"${songimageurl}"
      }
      
    ]
  },"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
}`


            const added = await client2.add(json);
            console.log(added)

            const url = `https://prnftmusic.infura-ipfs.io/ipfs/${added.path}`


            axios({
                url: `http://localhost:3001/api/nft-transaction`,
                method: "POST",
                data: {
                    sender_adress: user.user.walletAddress,
                    nftUrl: url,
                    clientId: user.user._id

                },
                withCredentials: true,
            }).catch((error) => {
                console.log(error)
                if (error.response.status) {
                    message.error("onlyowner메소드 때문인듯");
                } else {
                    message.error("미확인오류");
                }
            })


        }
        catch (error) {

            console.log(error)
        }
    }




    return (
        <div className='mynftpageContainer' >
            <div className='mynftpage open'>
                {/* MY NFT 페이지 내용을 작성하세요 */}

                <div className="content">
                    <h1>MY NFT Page</h1>


                    {/* {hasPublishedNFT
                        ? <img className='randomnftlogo' src="randomnft1.png"  />

                        : <img className='randomboxlogo' src="randomboxlogo.png"/>
                    }
                    <input type="file" id="input-image"  accept="image/*" onChange={uploadImage}    style={{display:"none"}}        />
        <label for="input-image"  className='custom-btn'  style={{color:'black'}}>UPLOAD IMAGE</label>
         */}


                    {hasPublishedNFT
                        ? <img className='randomnftlogo' src="randomnft1.png" />
                        : (
                            <div>
                                <img className='randomboxlogo' src="randomboxlogo.png" alt="randomboxlogo" />
                                <div>
                                <input
                                    type="file"
                                    id="input-image"
                                    accept="image/*"
                                    onChange={uploadImage}
                                    style={{ display: "none" }}
                                />
                                <label for="input-image" className='custom-btn' style={{ color: 'black' }}>UPLOAD IMAGE</label>
                                    </div>
                            </div>
                            
                        )
                    }


                    <button className="mypage--submit" onClick={() => { rotateBox(); }}>RANDOM NFT</button>




                </div>


            </div>
        </div>
    );
}

export default MyNFTPage;
