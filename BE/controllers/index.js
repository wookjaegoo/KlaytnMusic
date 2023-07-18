const {genWallet,sendTransaction,songDataSender,songOwnerSender} = require("../utils/UseCaver");



const sendTokenTransaction = async(req,res,next)=>
{
    const receiver_address=req.body.receiver_address;
    const amount=req.body.amount;
    const tokenId=req.body.tokenId;
    const signKey=req.body.signKey;

    sendTransaction(receiver_address,amount,tokenId,signKey).then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error)
      });

};

const requestSongData = async(req,res,next)=>
{
  try {
    const songList=await songDataSender();
    res.status(200).json(songList)
  } catch (error) {
    next(error) 
  }

};


module.exports={
    sendTokenTransaction,
    requestSongData,
}

