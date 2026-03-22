// 디렉터리 만들기 및 삭제하기
/*
    빈 디렉터리 삭제하기 - rmdirSync, rmdir 함수
    fs.rmdirSync(경로, [옵션])
    fs.rmdir(경로, [옵션], 콜백)
    - 경로
    - 옵션
      : force : 파일이나 디렉터리를 강제로 삭제할지 여부, 기본값 false
      : maxRetries: 오류 발생시 재시도 횟수, 디폴트 0
      : retryDelay : 재시도 횟수를 지정했을 때 개기 시간(밀리초), 기본값 100
      : recursive : 하위 폴더까지 삭제할지 여부, 기본값 false
    - 콜백 : err => {  }
*/

fs = require('fs');

fs.rm('./test2/test3/test4',{ recursive : true }, (err) => {
    if (err) return console.error(err);
    console.log('folder deleted');
});