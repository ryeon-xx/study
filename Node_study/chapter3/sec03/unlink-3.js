// 파일 삭제하기 - unlinkSync, unlink 함수
// 비동기 처리로 파일 삭제하기 - fs.unlink(파일, 콜백)

const fs = require('fs');

if(!fs.existsSync('./text-2.txt')) {
    // 파일이 없다면
    console.log('file does not exist');
} else {
    // 파일이 있다면
    fs.unlink('./text-2.txt', (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('file deleted');
    });
};