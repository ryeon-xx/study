// 디렉터리 만들기 및 삭제하기
/*
    디렉터리 만들기 - mkdirSync, mkdir 함수
    fs.mkdirSync(경로, [옵션])
    fs.mkdir(경로, [옵션], 콜백)
    - 경로
    - 옵션
      : recursive : 중간 경로가 존재하지 않으면 생성할지 여부, 기본값 false
      : mode : 사용자 권한, 기본값 0o777
      : 콜백 : err => {  }
*/


fs = require('fs');

if(fs.existsSync('./test')) {
    // 디렉터리가 있다면
    console.log('folder already exists');
} else {
    // 디렉터리가 없다면
    fs.mkdir('./test', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('folder created');
    });
};