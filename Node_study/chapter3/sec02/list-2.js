// 비동기 처리로 디렉터리 읽기 - readdir 함수
/*
    fs.readdir(경로, [옵션], 콜백)
    - 경로 : 파일 목록을 표시할 경로를 지정
    - 옵션
      : encoding : 기본값 utf8
      : withFileTypes : 기본값은 false, true 면 반환값이 문자열로 된 배열이 아닌
                        디렉터리 항목으로 된 배열로 반환
    - 콜백함수 : (err, files)
*/

const fs = require('fs');

fs.readdir('./',(err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});
