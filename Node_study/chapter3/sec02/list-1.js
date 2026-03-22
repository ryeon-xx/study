// FS 모듈 살펴보기 (File System 모듈의 약자)
// FS 모듈 가져오기 - const fs = require('fs');
// ex) fs.readFile('example.txt', (err,data) => { ... });

// 동기 처리로 디렉터리 읽기 - readdirSync 함수
// fs.readdirSync(경로, [옵션])
/*
    - 경로 : 파일 목록을 표시할 경로를 지정
    - 옵션 : encoding: 기본값 utf8
*/

const fs = require('fs');

let files = fs.readdirSync('./');
console.log(files);