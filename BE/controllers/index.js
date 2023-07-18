const {genWallet,sendTransaction,songDataSender,songOwnerSender} = require("../utils/UseCaver");
const bcrypt = require("bcrypt")
const Wallet = require("../models/Wallet")
const Client = require("../models/Client")
const jwt = require("jsonwebtoken")

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



const registerClient = async (req, res, next) => {
  try {
    // 비밀번호 암호화
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    
    //Issuer의 지갑 생성
    const {WalletPublicKey,WalletPrivateKey} = genWallet();
    
    const newClient = new Client({ ...req.body, password: hashedPassword, walletAddress : WalletPublicKey });

    // 블록체인 접근
    // 테스트넷의 지갑주소 생성
    

    // methods.function.send({from : 배포 월렛 주소})

    //Issuer의 지갑 저장
    const newWallet = new Wallet({
      ownerOf: newClient._id,
      publicKey: WalletPublicKey,
      privateKey: WalletPrivateKey,
    });
    
    // Wallet 저장
    await newWallet.save();
    // 새로운 Issuer 저장
    await newClient.save();
    

    

    res.status(200).json("Issuer가 등록되었습니다.");
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

const loginClient = async (req, res, next) => {
  try {
    // DB에서 Issuer를 찾는다.
    const client = await Client.findOne({ email: req.body.email });
    if (!client) return next(createError(404, "Issuer Not Found"));

    // 비밀번호 검증 로직
    const isCorrect = await bcrypt.compare(req.body.password, issuer.password);
    if (!isCorrect) return next(createError(400, "Wrong Password"));

    // 로그인 정보가 올바른 경우
    // JWT 발급
    const token = jwt.sign(
      { id: client._id, type: "client" },
      process.env.JWT_SECRET,
      { client: "DIDNOW", expiresIn: "30m" }
    );
    const { password, ...others } = client._doc;

    res
      .cookie("AccessToken", token, {
        httpOnly: true,
        secure: false,
      })
      .status(200)
      .json({type:"client",...others});
  } catch (error) {
    next(error);
  }
};

module.exports={
    sendTokenTransaction,
    requestSongData,
    registerClient,
    loginClient
}

