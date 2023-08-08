const Caver= require("caver-js")
const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'
const rpcURL = BAOBAB_TESTNET_RPC_URL
const caver = new Caver(rpcURL)

const dotenv= require("dotenv").config();
console.log(dotenv)


const NFT_ADDRESS=process.env.REACT_APP_NFT_ADDRESS
const AMARANTH_ADDRESS=process.env.REACT_APP_AMARANTH_ADDRESS


// const newkey=caver.wallet.keyring.createFromPrivateKey("0xad14c45bac1c614a3bafabd4ff3a092e1a888a574990bfbb0621f919e2be8f56");

const newkey=caver.wallet.keyring.createFromPrivateKey(process.env.REACT_APP_PRIVATE_KEY_KIAKAS);
//2번계정이 회원가입하는 유저한테 klay랑 토큰 쏴줘야함 test넷이니까 일단
//여기오류남 7/8
caver.wallet.add(newkey)

// const ArtGrowNFT= require("./ArtGrowNFT")
const Amaranthus= require("./Amaranthus");
const artifact = require("./ArtGrowNFT.json");

//did 문서 참고해서 로직짜보셈 금방할듯

const sendTokenAndKlay= async(receiver_address) =>
{
  const amount=caver.utils.toBN(5*10**18)
  const valueTransfer = caver.transaction.valueTransfer.create({
    from: newkey.address,
    to: receiver_address,
    value:amount,
    gas: 30000,
})

await valueTransfer.sign(newkey)

const receipt=await caver.rpc.klay.sendRawTransaction(valueTransfer);
console.log(receipt)

//klay전송 로직
const tokenamount=caver.utils.toBN(5*10**18)

const _Input=caver.abi.encodeFunctionCall(
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
  ,[receiver_address,tokenamount])

  const executionTx=caver.transaction.smartContractExecution.create({
    from:newkey.address,
    to: AMARANTH_ADDRESS,
    input:_Input,
    gas: 10000000,
 });

 const signed=await caver.wallet.sign(newkey.address,executionTx);
const receipt2=await caver.rpc.klay.sendRawTransaction(signed);

//토큰 로직


}





const sendTransaction = async (receiver_address,amount,tokenId,signKey) =>
{
//  const contract = new caver.klay.Contract(Amaranthus,AMARANTH_ADDRESS);
 const sender=caver.wallet.keyring.createFromPrivateKey(signKey)
 try {
    caver.wallet.add(sender)
    
 } catch (error) {
    
 }
 const _Input=caver.abi.encodeFunctionCall(
    {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_counter",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "sendTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ,[receiver_address,amount,NFT_ADDRESS,tokenId])

    
 const executionTx=caver.transaction.smartContractExecution.create({
    from:sender.address,
    to: AMARANTH_ADDRESS,
    input:_Input,
    gas: 10000000,
 });
 const signed=await caver.wallet.sign(sender.address,executionTx);
//  const encoded=tx.getRLPEncoding();
//  caver.rpc.klay.sendRawTransaction(signed).then(console.log);

 const receipt=await caver.rpc.klay.sendRawTransaction(signed);
 //메타마스크 사인과정 없이 보내는 로직 wallet keyring add과정이 필수불가결함
 //await 붙이니까 next로 받아주는듯 비동기 처리에대한 확실한 이해가 필요함 

}

const sendNftTr = async (sender_adress,nftUrl,signKey) =>
{
//  const contract = new caver.klay.Contract(Amaranthus,AMARANTH_ADDRESS);
 const sender=caver.wallet.keyring.createFromPrivateKey(signKey)
 try {
    caver.wallet.add(sender)
    
 } catch (error) {
    
 }
 const _Input=caver.abi.encodeFunctionCall(
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
    ,[sender_adress,nftUrl])

    
 const executionTx=caver.transaction.smartContractExecution.create({
    from:sender.address,
    to: NFT_ADDRESS,
    input:_Input,
    gas: 10000000,
 });
 const signed=await caver.wallet.sign(sender.address,executionTx);
//  const encoded=tx.getRLPEncoding();
//  caver.rpc.klay.sendRawTransaction(signed).then(console.log);

 const receipt=await caver.rpc.klay.sendRawTransaction(signed);
 //메타마스크 사인과정 없이 보내는 로직 wallet keyring add과정이 필수불가결함
 //await 붙이니까 next로 받아주는듯 비동기 처리에대한 확실한 이해가 필요함 

}

const genWallet = () => {
  keyring = caver.wallet.keyring.generate();
  return {
    WalletPublicKey: keyring._address,
    WalletPrivateKey: keyring._key._privateKey,
  };
};

const songDataSender =async ()=>
{
  const {abi} = artifact;

  const contractInstance = new caver.contract(abi,NFT_ADDRESS)
  const num = await contractInstance.methods.totalSupply().call();
  let songList=[]

  for (let i = 0; i < num ; i++) {

    const Writer = await contractInstance.methods.tokenURI(i).call();
    const listen_Count = await contractInstance.methods.howmanyListen(i).call();
    
    const response = await fetch(Writer);
    if (!response.ok)
      throw new Error(response.statusText);
    let songs = await response.json();
    
    songList.push(songs);
    songList[i].listenCount = parseInt(listen_Count);


  }

  return songList;

}



module.exports={
    sendTransaction,
    sendNftTr,
    genWallet,
    songDataSender,
    sendTokenAndKlay
  
}