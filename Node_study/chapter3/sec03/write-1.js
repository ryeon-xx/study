// 파일에 기록하기 - writeFileSync, writeFile 함수
/*
    동기 처리로 파일에 쓰기 - writeFileSync 함수
    fs.writeFileSync(파일, 내용, [옵션])
    - 파일 : 내용을 기록할 파일 경로
    - 내용 : 기록할 내용을 지정
    - 옵션
      : encoding: 기본값 utf8
      : flag : 기본값 w
      : mode : 파일 사용자 권한, 기본값 0o666
*/

fs = require('fs');

const data = fs.readFileSync('./example.txt','utf-8');
fs.writeFileSync('./text-1.txt',data);