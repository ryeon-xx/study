// 파일 삭제하기 - unlinkSync, unlink 함수
/*
    동기 처리로 파일 삭제하기
    fs.unlinkSync(파일)
*/

const fs = require('fs');

fs.unlinkSync('./text-1.txt');
console.log('file deleted');