const mongoose = require("mongoose");

const dbUrl =
    "mongodb+srv://paeter3:rnwodnr151%40@cluster0.pr5pp8g.mongodb.net/";

const connect = async () => {
    if (process.env.NODE_ENV !== "production") {
        mongoose.set("debug", true); 
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            ssl: true,
            sslValidate: true,
            sslCA: require("fs").readFileSync(
                `${__dirname}/ca/rds-combined-ca-bundle.pem`
            )
        });
        console.log("몽고디비 연결 성공");
    } catch (error) {
        console.log("몽고디비 연결 에러", error);
    }
};

mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
    connect();
});

module.exports = connect;
