/*
    프로미스 promise
    : 비동기 함수에서 프라미스 객체를 리턴
    : 비동기 작업이 성공적으로 끝나면 then 함수를 실행
    : 오류가 발생하여 실패했을 때는 catch 함수를 실행
    
    : promise를 리턴하는 모듈 함수 가져오기
      - const fs = require('fs').promises;
      
      - fs.비동기함수()
          .then((result) => { // 성공시 실행할 코드  })
          .catch((err) => { // 실패 시 실행할 코드 })
*/

const fs = require('fs').promises;

fs.readdir('./')
.then((result) => console.log(result))
.catch((err) => console.error(err));