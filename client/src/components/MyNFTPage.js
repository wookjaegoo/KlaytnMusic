import React, { useState } from 'react';
import "./MyNFTPage.css";


function MyNFTPage() {


    const [hasPublishedNFT, setHasPublishedNFT] = useState(false);




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
        setTimeout(() => {
            handlePublishNFT(); // 회전이 끝난 후 NFT를 발행합니다.
            setTimeout(visibleImage, 1000); // handlePublishNFT 실행 후 3초 뒤에 visibleImage 함수를 호출합니다.

        }, 3000); // 3초 후에 실행됩니다.

    }

    function visibleImage() {
        const box = document.querySelector('.randomnftlogo');
        box.classList.add('visible');

    }



    return (
        <div className='mynftpageContainer' >
            <div className='mynftpage open'>
                {/* MY NFT 페이지 내용을 작성하세요 */}

                <div className="content">
                    <h1>MY NFT Page</h1>


                    {hasPublishedNFT
                        ? <img className='randomnftlogo' src="randomnft1.png" alt="" />

                        : <img className='randomboxlogo' src="randomboxlogo.png"/>
                    }

                    <button className="mypage--submit" onClick={() => { rotateBox(); }}>RANDOM NFT</button>




                </div>


            </div>
        </div>
    );
}

export default MyNFTPage;
