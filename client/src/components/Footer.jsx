import { useState,useEffect } from 'react'
import { create } from 'ipfs-http-client'
import React from 'react';
import "./Footer.css"
import useEth from "../contexts/EthContext/useEth";
// const client2= create('/ip4/127.0.0.1/tcp/5001')
import Caver from 'caver-js'
import axios from 'axios';
import { message,Spin} from "antd";

let ipfsurl = ""
let songimageurl=""
let writerimageurl=""

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



function Footer({user}) {  
  const [fileUrl, updateFileUrl] = useState("");
  const [imageUrl, updateImageUrl] = useState("");

  const[inputs, setInputs] =useState({song:'',writer:''});
  const {song ,writer} =inputs;
  const{state: { contract, account,web3 } } = useEth();

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [address,setAddress] =useState("");


  useEffect(() => {
    // setAddress(user.user.walletAddress);

    setIsLoading(false)
  }, []);



async function uploadFile(e) {
  const file = e.target.files[0]
  
  try {
    
    const added2 = await client2.add(file)
  
  
    
    const url = `https://prnftmusic.infura-ipfs.io/ipfs/${added2.path}`
    ipfsurl=url
   updateFileUrl(url)
   console.log(ipfsurl)
   setSelectedFile(file);


  } catch (error) {
    console.log('Error uploading file: ', error)
  } 

}

async function uploadImage(e) {
  const imageFile = e.target.files[0];

  try {
    const addedImage = await client2.add(imageFile);
    const url = `https://prnftmusic.infura-ipfs.io/ipfs/${addedImage.path}`;
    // 여기서 imageUrl을 사용하여 업로드 된 이미지를 활용할 수 있습니다.
    songimageurl=url;
    console.log(songimageurl)
    updateImageUrl(url)

    // 아래에 추가적으로 원하는 작업을 수행할 수 있습니다.
  } catch (error) {
    console.error('이미지 업로드 중 오류 발생: ', error);
  }
}


const handleFileChange = (event) => {
  const file = event.target.files[0];
  setSelectedFile(file);
};

const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setDragging(true);
};

const handleDragLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setDragging(false);
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setDragging(false);
  const file = event.dataTransfer.files[0];
  setSelectedFile(file);

};

const handleUpload = () => {
  if (selectedFile) {

    setUploading(true);
    // 파일 업로드 로직을 이곳에 작성합니다.
    // ...
    // 업로드가 완료되면 아래와 같이 호출합니다.
    setUploading(false);
    // setSelectedFile(null);
  }
};


async function onChange2(e)
{
  const {value,name} =e.target
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
}

// const safeMint = async () => {
//        caver.klay
//       .sendTransaction({
//          type: 'SMART_CONTRACT_EXECUTION',
//          from: account,
//          to: '0xbb7447f2b30ac77eae457bc12403cf63a298d834',
//          gas: 300000
//       })
      
//       .once('error', error => {
//          console.log('error', error);
//          alert("지불에 실패하셨습니다.");
//       })
//   }


async function deployNFT(e)
{
  
  const num=await contract.methods.totalSupply().call();
  //tokenid call function 임 등록할때는 num+1이겠지
  //근데 다수가 이 트랜잭션을 진행한다고 하면.. 같은 num으로 tr 발생하는 가능성이 존재해서 이걸 배제하려면 그냥 음원 자체의 tokenid를 파싱해서리스트에 박는게 나음
  try {
  let json = `{"name":"${song}","author":"${writer}","url":"${fileUrl}","id":${num},
  "links":{
    "images":[
      {
        "url":"${writerimageurl}"
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
    url:`http://localhost:3001/api/nft-transaction`,
    method:"POST",
    data:{
        sender_adress:user.user.walletAddress,
        nftUrl:url,
        clientId:user.user._id

    },
    withCredentials:true,
}).catch((error)=>
{
  console.log(error)
    if (error.response.status) {
        message.error("onlyowner메소드 때문인듯");
      } else {
        message.error("미확인오류");
      }    
})


  // const output = await contract.methods.safeMint(account[0],url).send({from:account[0], gas: 10000000});
  
  // console.log(output)
} 
catch (error) {  
   
  console.log(error)
}
}


  return (

  <div className='Deploys' >

<div className='Procedure'>  
<Spin spinning={isLoading} tip="로딩중..." size="large">
      <div
      className={`container ${dragging ? 'dragging' : ''}`}
      style={{ '--dragging-display': dragging ? 'block' : 'none' } }
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
            <h1>Drag your music</h1>

      <div className="input-container">

        {/* <input
          type="file"
          id="input-file"
          className="input-file"
          accept="audio/*"
          onChange={handleFileChange}
          disabled={uploading}
        /> */}
        <input type="file" id="input-file"  accept="audio/*" onChange={uploadFile}    style={{display:"none"}}         disabled={uploading}/>
        <label for="input-file"  className='custom-btn' style={{color:'black'}}>UPLOAD MUSIC</label>
        
        <input type="file" id="input-image"  accept="image/*" onChange={uploadImage}    style={{display:"none"}}        />
        <label for="input-image"  className='custom-btn'  style={{color:'black'}}>UPLOAD IMAGE</label>
        


      </div>
      <button className="upload-btn" onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? '업로드 중...' : ''}
      </button>

      <p className={`drag-text ${dragging ? 'dragging' : ''}`}>여기에 파일을 드래그하여 업로드하세요</p>
      <img src='downlogo.png' ></img>
      <div>      {selectedFile ? selectedFile.name: ''}
</div>
    </div>
    <div >
      NAME <input name="song" placeholder='NAME' onChange={onChange2} value={song} style={{display:'inline-block'}} />
      </div>
      <div>
      WRITER <input name="writer"placeholder='WRITER' onChange={onChange2} value={writer}style={{display:'inline-block'}}  />
     
        </div> 

        <div>
    
    <label for="jsonupload" onClick={deployNFT} id="json"  className='custom-btn'  style={{color:'black'}}>DEPLOY NFT</label>
  
    </div>

    </Spin>
      </div>


  </div>

  
   
  );
}

export default Footer;
