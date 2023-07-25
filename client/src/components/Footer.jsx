import { useState } from 'react'
import { create } from 'ipfs-http-client'
import React from 'react';
import "./Footer.css"
import useEth from "../contexts/EthContext/useEth";
// const client2= create('/ip4/127.0.0.1/tcp/5001')
import Caver from 'caver-js'

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



function Footer() {  
  const [fileUrl, updateFileUrl] = useState("");
  const[inputs, setInputs] =useState({song:'',writer:''});
  const {song ,writer} =inputs;
  const{state: { contract, account,web3 } } = useEth();

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  
async function uploadFile(e) {
  const file = e.target.files[0]
  
  try {
    
    const added2 = await client2.add(file)
  
  
    
    const url = `https://prnftmusic.infura-ipfs.io/ipfs/${added2.path}`
    ipfsurl=url
   updateFileUrl(url)
   setSelectedFile(file);

   console.log(url)

  } catch (error) {
    console.log('Error uploading file: ', error)
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
    setSelectedFile(null);
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


  const added = await client2.add(json)
  
  const url = `https://prnftmusic.infura-ipfs.io/ipfs/${added.path}`
  const output = await contract.methods.safeMint(account[0],url).send({from:account[0], gas: 10000000});
  
  console.log(output)
} 
catch (error) {  
   
  console.log(error)
}
}


  return (

  <div className='Deploys' >

<div className='Procedure'>  
    




      <div
      className={`container ${dragging ? 'dragging' : ''}`}
      style={{ '--dragging-display': dragging ? 'block' : 'none' }}
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
        <input type="file" id="input-file"       accept="audio/*" onChange={uploadFile}    style={{display:"none"}}         disabled={uploading}/>
        <label for="input-file"  className='custom-btn' style={{color:'black'}}>UPLOAD MUSIC</label>


      </div>
      <button className="upload-btn" onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? '업로드 중...' : '음악 업로드'}
      </button>
{/*       
      {
        fileUrl
      } */}
      <p className={`drag-text ${dragging ? 'dragging' : ''}`}>여기에 파일을 드래그하여 업로드하세요</p>

    </div>
    <div >
      NAME <input name="song" placeholder='NAME' onChange={onChange2} value={song} style={{display:'inline-block'}} />
      </div>
      <div>
      WRITER <input name="writer"placeholder='WRITER' onChange={onChange2} value={writer}style={{display:'inline-block'}}  />
     
        </div> 

        <div>
    
    <label for="jsonupload" onClick={deployNFT} id="json"  className='custom-btn2'  style={{color:'black'}}>DEPLOY NFT</label>

  
    </div>


      </div>


  </div>

  
   
  );
}

export default Footer;
