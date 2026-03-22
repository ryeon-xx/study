/*
    버퍼(buffer)
    - 임시 데이터를 저장하는 물리적인 메모리 공간
    - 노드의 버퍼 크기는 고정되어 있음
*/

const fs = require('fs');

fs.readFile('example.txt',(err, data) => {
    if (err) return console.error(err);

    console.log(data);  // 이진 데이터 표시
    console.log('\n');
    console.log(data.toString()); // 문자열로 변환해서 표시
});