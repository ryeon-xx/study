// 파일 읽기 - readFileSync 함수, readFile 함수
/*
    동기 처리로 파일 읽기 - readFileSync 함수
    fs.readFileSync(경로, [옵션])
    - 경로
    - 옵션
      : encoding : 기본값 null
      : flag : 기본값, r, r^+(읽기&쓰기), w(쓰기), a(추가) 등
*/

fs = require('fs');

const data = fs.readFileSync('./example.txt');
console.log(data);