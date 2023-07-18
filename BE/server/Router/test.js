const express = require('express');
const router = express.Router();

const {sendTokenTransaction,
  requestSongData,
  registerClient,
  loginClient}=require("../../controllers")

router.get('/', (req, res)=>{
  res.send({ test: "bye"});
});

router.get('/play-transaction', (req, res)=>{
  res.send({ test: "ptr"});
});

router.get('/songList',requestSongData);


router.post('/play-transaction',sendTokenTransaction)

router.post('/register-client',registerClient)

router.post('/login-client',loginClient)

// router.post('/play-transaction', (req, res) => {
//   console.log(req.body)
//   //ㅅㅂ 바디 부분 이렇게 짤라서보내라고..?
//   sendTransaction(req.body.receiver_address,req.body.amount,req.body.tokenId,req.body.signKey)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((error) => {
//       console.log(error)
//     });
// });

module.exports = router;