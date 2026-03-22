// 파일에 기록하기 - writeFileSync, writeFile 함수
/*
    기존 파일에 내용 추가하기 - appendFileSync, appendFile 함수
    fs.appendFileSync(파일, 내용, [옵션])
    fs.appendFile(파일, 내용, [옵션], 콜백)
*/

fs = require('fs');

fs.appendFileSync('./text-2.txt', '\n\n 새로운 내용 추가',(err) => {
    if (err) {
        console.error(err);
    }
    console.log('appending to file');
});