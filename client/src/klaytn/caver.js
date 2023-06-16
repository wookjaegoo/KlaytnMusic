/**
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
import Caver from 'caver-js'

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'

const rpcURL = BAOBAB_TESTNET_RPC_URL

const caver = new Caver(window.klaytn)
const contractAddress = '0x487dafee9b64044a04a2577f388eb2c8e2fea14a'

// caver.klay.getCode(contractAddress).then(console.log);
// 행 추가
const KlaytnGreeter = require('../contracts/ArtGrowNFT.json');
// 스마트 컨트랙트 주소 입력
// const klaytnGreeter = new caver.klay.Contract(KlaytnGreeter.abi, contractAddress);


export default caver