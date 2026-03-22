// path 모듈
/* path 모듈 가져오기
   const path = require('path');
*/
/* 경로 합치기
   path.join(경로1, 경로2, ...)
*/

const path = require('path');

// 경로 연결하기
const fullPath = path.join('work', 'some', 'ex.txt');
console.log(fullPath);


// 경로만 추출하기
/*
    dirname 함수
    path.dirname(경로)
*/

const dir = path.dirname(__filename);
console.log(`경로만 : ${dir}`);


// 파일 이름 추출하기 - basename 함수
/*
    path.basename(경로)
    - 경로를 제외한 파일명만 리턴

    path.basename(경로, 확장자)
    - 지정한 확장자를 제외한 파일명 리턴
*/

const fn = path.basename(__filename);
const fn2 = path.basename(__filename,'.js');

console.log(`파일 이름 : ${fn}`);
console.log(`파일 이름(확장자 제외) : ${fn2}`);


// 확장자 추출하기 - extname 함수
/*
    path.extname(경로)
*/

const ext = path.extname(__filename);
console.log(`파일 확장자 : ${ext}`);
console.log(path.basename(__filename,ext));


// 경로를 객체로 반환하기 - parse 함수
/*
    path.parse(경로)
    {
        root, // 루트 디렉터리
        dir,  // 디렉터리 경로
        base, // 파일명, 확장명
        ext,  // 확장명
        name  // 파일명
    }
*/

// 경로 분해하기
const parsePath = path.parse(__filename);
console.log(parsePath);