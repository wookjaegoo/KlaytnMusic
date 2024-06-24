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

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
