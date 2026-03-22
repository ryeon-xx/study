// 디렉터리 만들기 및 삭제하기
/*
    빈 디렉터리 삭제하기 - rmdirSync, rmdir 함수
    fs.rmdirSync(경로, [옵션])
    fs.rmdir(경로, [옵션], 콜백)
    - 경로
    - 옵션
      : maxRetries: 오류 발생시 재시도 횟수, 디폴트 0
      : retryDelay : 재시도 횟수를 지정했을 때 개기 시간(밀리초), 기본값 100
    - 콜백 : err => {  }
*/

fs = require('fs');

if(fs.existsSync('./test')) {
    // 디렉토리가 있다면
    fs.rmdir('./test', (err) => {
        if (err) return console.error(err);
        console.log('folder deleted');
    });
} else {
    // 삭제할 디렉토리가 없다면
    console.log('folder does not exist');
};