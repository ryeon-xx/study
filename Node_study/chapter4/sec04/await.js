/*
    async/await
    : ECMA 2017(ES8)로부터 도입된 비동기 처리 방법
    : 비동기 처리를 하는 함수 앞에 async 키워드 설정
    : 비동기 함수 호출시 await를 앞에 붙임
      - 비동기 함수는 반드시 Promise 객체를 리턴해야 함
    : 예외 처리는 try-catch 블록으로 처리

    -> 비동기 처리지만 동기 처럼 코드를 작성할 수 있음
*/

const fs = require('fs').promises;

async function readDirAsync() {
    try {
        const files = await fs.readdir('./'); // Promise 객체를 리턴하는 비동기 함수
        console.log(files);
    } catch (err) {
        console.error(err);
    }
}

readDirAsync();