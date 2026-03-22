/*
    2개의 스트림을 연결하는 파이프 - pipe
    - data 이벤트가 발생했을 때 따로 가져오기 기록하던 것을 한꺼번에 처리
    - 이벤트 처리를 하지 않아도 됨.
    fs.readStream.pipe(writeStream, [옵션])

    동작 방식
    - 리더블 스트림에서 데이터 읽기
    - 읽은 데이터를 라이터블 스트림으로 기록
    - 라이터블 스트림에 다 기록할 때까지 리더블 스트림에서 읽고 쓰기 반복
    - 리더블 스트림에서 더 이상 읽을 데이터가 없거나, 라이터블 스트림에 더 이상 쓸 데이터가 없으면 pipe 함수가 자동 종료

    pipe 함수를 사용하지 않을 때
    - fs.readStream.on('data', (chunk) => {
        fs.writeStream.write(chunk)
        });

    pipe 함수를 사용했을 때
    - fs.readStream.pipe(writeStream);
*/


const fs = require('fs');

const rs = fs.createReadStream('./readMe.txt','utf-8');
const ws = fs.createWriteStream('./writeMe.txt');

rs.pipe(ws);