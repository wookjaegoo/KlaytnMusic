/**
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
import Caver from 'caver-js'

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'

const rpcURL = BAOBAB_TESTNET_RPC_URL

const caver = new Caver(window.klaytn)
const contractAddress = '0x4db1108f44bb1429914c4f6161369d381963b326'
const contractAddress2='0x9fbf326fda60bbfcf19c098c73bdfea65d442b0d'

const key="0xad14c45bac1c614a3bafabd4ff3a092e1a888a574990bfbb0621f919e2be8f56"
const newkey=caver.wallet.keyring.createFromPrivateKey(key)
caver.wallet.add(newkey)


// caver.klay.getCode(contractAddress).then(console.log);
// 행 추가
const KlaytnGreeter = require('../contracts/ArtGrowNFT.json');
// 스마트 컨트랙트 주소 입력
// const klaytnGreeter = new caver.klay.Contract(KlaytnGreeter.abi, contractAddress);


export default caver