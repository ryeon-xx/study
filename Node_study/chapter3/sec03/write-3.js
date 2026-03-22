// 파일에 기록하기 - writeFileSync, writeFile 함수
/*
    비동기 처리로 파일에 쓰기 - writeFile 함수
    fs.writeFile(파일, 내용, [옵션])
    - 파일 : 내용을 기록할 파일 경로
    - 내용 : 기록할 내용을 지정
    - 옵션
      : encoding : 기본값 utf-8
      : flag : 기본값 w
      : mode : 파일 사용자 권한, 기본값 0o666
      : signal : 쓰기 취소 설정
    - 콜백 : err => {  }
*/


fs = require('fs');

fs.readFile('./example.txt','utf-8',(err, data) => {
    if(err) {
        console.error(err);
    }
    fs.writeFile('./text-2.txt',data,(err) => {
        if(err) {
            console.error(err);
        }
        console.log('text-2.txt is saved!');
    });
});