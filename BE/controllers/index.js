const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
    genWallet,
    sendTransaction,
    songDataSender,
    sendNftTr,
    sendTokenAndKlay,
    transferOwnership
} = require("../utils/UseCaver");
const Wallet = require("../models/Wallet");
const Client = require("../models/Client");

const createError = require("../utils/Error");

const sendTokenTransaction = async (req, res, next) => {
    try {
        console.log(req.body);
        const { receiver_address } = req.body;
        const { amount } = req.body;
        const { tokenId } = req.body;
        const clientWallet = await Wallet.findOne({
            ownerOf: req.body.clientId
        });

        const result = await sendTransaction(
            receiver_address,
            amount,
            tokenId,
            clientWallet.privateKey
        );
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const sendNftTransaction = async (req, res, next) => {
    try {
        const { sender_adress } = req.body;

        const { nftUrl } = req.body;

        const clientWallet = await Wallet.findOne({
            ownerOf: req.body.clientId
        });

        const result = await sendNftTr(
            sender_adress,
            nftUrl,
            clientWallet.privateKey
        );
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const requestSongData = async (req, res, next) => {
    try {
        const songList = await songDataSender();
        res.status(200).json(songList);
    } catch (error) {
        next(error);
    }
};

const registerClient = async (req, res, next) => {
    try {
        // 비밀번호 암호화
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // Issuer의 지갑 생성
        const { WalletPublicKey, WalletPrivateKey } = genWallet();

        const newClient = new Client({
            ...req.body,
            password: hashedPassword,
            walletAddress: WalletPublicKey
        });

        // methods.function.send({from : 배포 월렛 주소})

        // Issuer의 지갑 저장
        const newWallet = new Wallet({
            ownerOf: newClient._id,
            publicKey: WalletPublicKey,
            privateKey: WalletPrivateKey
        });

        // Wallet 저장
        await newWallet.save();
        // 새로운 Issuer 저장
        await newClient.save();

        await sendTokenAndKlay(WalletPublicKey);

        res.status(200).json("Client가 등록되었습니다.");
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const loginClient = async (req, res, next) => {
    try {
        // DB에서 Issuer를 찾는다.
        const client = await Client.findOne({ email: req.body.email });
        if (!client) return next(createError(404, "Issuer Not Found"));

        // 비밀번호 검증 로직
        const isCorrect = await bcrypt.compare(
            req.body.password,
            client.password
        );
        if (!isCorrect) return next(createError(400, "Wrong Password"));

        // 로그인 정보가 올바른 경우
        // JWT 발급
        const token = jwt.sign(
            { id: client._id, type: "client" },
            process.env.JWT_SECRET
        );
        const { password, ...others } = client._doc;

        res.cookie("AccessToken", token, {
            httpOnly: true,
            secure: false
        })
            .status(200)
            .json({ type: "client", ...others });
    } catch (error) {
        next(error);
    }
};

const logout = (req, res, next) => {
    try {
        res.clearCookie("AccessToken")
            .status(200)
            .json("성공적으로 Logout 되었습니다.");
    } catch (error) {
        next(error);
    }
};

const getAccessToken = async (req, res, next) => {
    try {
        switch (req.user.type) {
            case "client":
                const client = await Client.findById(req.user.id);
                return res
                    .status(200)
                    .json({ type: req.user.type, user: client });
            default:
                return next(createError(313, "User Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

const getClient = async (req, res, next) => {
    try {
        const client = await client.findById(req.params.clientId);
        if (!client)
            return next(createError(404, "사용자가 존재하지 않습니다."));

        res.status(200).json(client);
    } catch (error) {
        next(error);
    }
};

const changeNftOwnership = async (req, res, next) => {
    try {
        const { receiver_address } = req.body;
        const { tokenId } = req.body;
        const result = await transferOwnership(receiver_address, tokenId);
        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    sendTokenTransaction,
    sendNftTransaction,
    requestSongData,
    registerClient,
    loginClient,
    getAccessToken,
    logout,
    getClient,
    changeNftOwnership
};
