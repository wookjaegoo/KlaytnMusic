const express = require('express');
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const test = require('./Router/test');
const cors = require("cors");
const connect = require("../DB/index")
// const crypto = require('crypto');
// const JWT_SECRET = crypto.randomBytes(32).toString('hex');

app.use(cors(
    {
        origin:'http://localhost:3000',
        methods: ["GET","POST","PUT","DELETE"],
        credentials:true,
    }
));


app.use(express.json())

app.use(cookieParser());
app.use('/api', test);



app.get('/', (req, res) => {
    // 클라이언트에게 응답 데이터를 전송
    const responseData = { message: 'Hello from the server!' };
    res.json(responseData);
  });

  connect(); 

// console.log(JWT_SECRET)

const port=3001; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});