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
  
  
async function uploadFile(e) {
  const file = e.target.files[0]
  
  try {
    
    const added2 = await client2.add(file)
  
  
    
    const url = `https://prnftmusic.infura-ipfs.io/ipfs/${added2.path}`
    ipfsurl=url
   updateFileUrl(url)
   console.log(url)

  } catch (error) {
    console.log('Error uploading file: ', error)
  } 
}


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
  let json = `{"name":"${song}","author":"${writer}","url":"${fileUrl}","id":"${num}",
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
    
      <h1>Drag your music</h1>

            
      <div>
        
      <div >
      NAME <input name="song" placeholder='NAME' onChange={onChange2} value={song} style={{display:'inline-block'}} />
      </div>
      <div>
      WRITER <input name="writer"placeholder='WRITER' onChange={onChange2} value={writer}style={{display:'inline-block'}}  />
     
        </div> 

      <br>
      </br>
      
      <input type="file" id="input-file" onChange={uploadFile}    style={{display:"none"}}/>
      <label for="input-file"  className='custom-btn' style={{color:'black'}}>UPLOAD MUSIC</label>
      
      {/* <input type="file" id='profileupload1'  onChange={onChangeprofile1}  style={{display:"none"}}/>
      <label for="profileupload1" className='custom-btn'> 등급 인증서 사진 </label>
       */}

      {
        fileUrl
      }

    
      <div>
    
      <br />
      <label for="jsonupload" onClick={deployNFT} id="json"  className='custom-btn2'  style={{color:'black'}}>DEPLOY NFT</label>
  
      <br />
    
      </div>
      </div>

      </div>


  </div>

  
   
  );
}

export default Footer;
