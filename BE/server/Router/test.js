const express = require("express");

const router = express.Router();
const verifyToken = require("../../utils/VerifyToken");
const {
    sendTokenTransaction,
    sendNftTransaction,
    requestSongData,
    registerClient,
    loginClient,
    getAccessToken,
    logout,
    changeNftOwnership
} = require("../../controllers");

router.get("/", (req, res) => {
    res.send({ test: "bye" });
});

router.get("/play-transaction", (req, res) => {
    res.send({ test: "ptr" });
});

router.get("/songList", requestSongData);

router.post("/play-transaction", sendTokenTransaction);
router.post("/nft-transaction", sendNftTransaction);

router.post("/register-client", registerClient);

router.post("/login-client", loginClient);

router.post("/logout", verifyToken, logout);

router.post("/change-ownership", changeNftOwnership);

router.get("/accesstoken", verifyToken, getAccessToken);

module.exports = router;
