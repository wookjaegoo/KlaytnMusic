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
//여기오류남 7/8
caver.wallet.add(newkey)

// const ArtGrowNFT= require("./ArtGrowNFT")
const Amaranthus= require("./Amaranthus");
const artifact = require("./ArtGrowNFT.json");


//did 문서 참고해서 로직짜보셈 금방할듯


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
    gas: 1000000000,
 });
 const signed=await caver.wallet.sign(sender.address,executionTx);
//  const encoded=tx.getRLPEncoding();
 caver.rpc.klay.sendRawTransaction(signed).then(console.log);
 //메타마스크 사인과정 없이 보내는 로직 wallet keyring add과정이 필수불가결함

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

    const response = await fetch(Writer);
    if (!response.ok)
      throw new Error(response.statusText);
    let songs = await response.json();
    
    songList.push(songs);

  }

  return songList;

}


module.exports={
    sendTransaction,
    genWallet,
    songDataSender,
}