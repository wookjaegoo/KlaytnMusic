const express = require('express');
const router = express.Router();
const verifyToken = require("../../utils/VerifyToken")
const {sendTokenTransaction,
  sendNftTransaction,
  requestSongData,
  registerClient,
  loginClient,
  getAccessToken,
  logout,
  changeNftOwnership
  
}=require("../../controllers")



router.get('/', (req, res)=>{
  res.send({ test: "bye"});
});

router.get('/play-transaction', (req, res)=>{
  res.send({ test: "ptr"});
});

router.get('/songList',requestSongData);


router.post('/play-transaction',sendTokenTransaction)
router.post('/nft-transaction',sendNftTransaction)


router.post('/register-client',registerClient)

router.post('/login-client',loginClient)

router.post('/logout', verifyToken, logout)

router.post('/change-ownership',changeNftOwnership)

// router.post('/play-transaction', (req, res) => {
//   console.log(req.body)
//   sendTransaction(req.body.receiver_address,req.body.amount,req.body.tokenId,req.body.signKey)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((error) => {
//       console.log(error)
//     });
// });


/*
    @ dev : Get AccessToken
    @ desc : 
         - 현재 로그인한 사용자의 AccessToken을 반환합니다.
         - Front에서 로그인을 유지하기 위해 사용됩니다.
    @ subject : Issuer, Holder, Verifier
*/ 
router.get('/accesstoken' ,verifyToken, getAccessToken )


module.exports = router;