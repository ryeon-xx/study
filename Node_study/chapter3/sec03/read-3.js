// 파일 읽기 - readFileSync 함수, readFile 함수
/*
    비동기 처리로 파일 읽기 - readFile 함수
    fs.readFile(파일, [옵션], 콜백)
    - 파일
    - 옵션
      : encoding
      : flag
      : signal : 파일을 읽는데 시간이 너무 걸릴 경우 중간 취소를 위해 설정
    - 콜백
      : (err, data) 매개변수
*/

fs = require('fs');

fs.readFile('./example.txt','utf-8',(err,data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});