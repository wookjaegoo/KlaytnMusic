const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const cors = require("cors");
const test = require("./Router/test");

app.use(
    cors({
        origin: "https://schoolnftproject.com",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.use(express.json());

app.use(cookieParser());
app.use("/api", test);

// Error Handling
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    res.status(status).json({
        success: false,
        status,
        message
    });
});

const port = 3001; // React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
