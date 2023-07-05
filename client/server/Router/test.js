const express = require('express');
const router = express.Router();
var readlineSync = require('readline-sync');

router.get('/', (req, res)=>{
  res.send({ test: "hi"});
});

function getPrivateKey() {
  const privateKey = readlineSync.question('개인 키를 입력하세요:', {
    hideEchoBack: true, // 입력값 가리기
    mask: '' // 입력값을 표시하지 않음
  });

  // 개인 키 유효성 검사 로직 추가

  return privateKey;
}

// 개인 키를 안전하게 입력받고 사용하는 예시
const privateKey = getPrivateKey();
console.log('입력받은 개인 키:', privateKey);


module.exports = router;