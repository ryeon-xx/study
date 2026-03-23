// 논블로킹 I/O, non-blocking I/O
// 작업을 비동기로 처리

const fs = require('fs');

fs.readFileSync('example.txt','utf-8',(err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

console.log('코드 끝');