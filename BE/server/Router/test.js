const express = require('express');
const router = express.Router();
var readlineSync = require('readline-sync');

// const{sendTransaction}=require("../../utils/UseCaver")
const {sendTokenTransaction}=require("../../controllers")

router.get('/', (req, res)=>{
  res.send({ test: "bye"});
});

router.get('/play-transaction', (req, res)=>{
  res.send({ test: "ptr"});
});

router.post('/play-transaction',sendTokenTransaction)

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