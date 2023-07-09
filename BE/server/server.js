const express = require('express');
const dotenv = require("dotenv");
const app = express();
const test = require('./Router/test');
const cors = require("cors")

dotenv.config();

app.use(cors(
    {
        origin:'http://localhost:3000',
        methods: ["GET","POST","PUT","DELETE"],
        credentials:true,
    }
));


app.use(express.json())
app.use('/api', test);



// app.get('/', (req, res) => {
//     // 클라이언트에게 응답 데이터를 전송
//     const responseData = { message: 'Hello from the server!' };
//     res.json(responseData);
//   });
  


const port=3001; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});