// 블로킹 I/O, blocking I/O
/*
    - I/O를 수행할 때 우리의 코드 실행은 멈춤
    - 동기 함수는 블로킹 I/O로 실행
    - 노드의 함수명이 ~ Sync()로 끝남
    - I/O의 결과 데이터가 리턴됨, 에러 발생시 예외가 발생

    - 단점
      : I/O 작업은 시간이 많이 걸림
      : 그 시간동안 아무것도 할 수 없음
*/

const fs = require('fs');

const data = fs.readFileSync('example.txt'); // 블로킹 I/O
console.log(data);  // 파일 읽기가 끝날 때까지 대기
console.log('코드 끝');  // 파일을 읽고 내용을 표시할 때까지 대기