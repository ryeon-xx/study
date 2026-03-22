// 파일에 기록하기 - writeFileSync, writeFile 함수
/*
    파일 존재 여부 체크하기 - existsSync 함수
    fs.existsSync(파일)
*/

fs = require('fs');

const data = fs.readFileSync('./example.txt','utf-8');

if(fs.existsSync('text-1.txt')) {
    // text-1.txt 파일이 있다면
    console.log('file already exist');
} else {
    // text-1.txt 파일이 없다면
    fs.writeFileSync('./text-1.txt',data);
}