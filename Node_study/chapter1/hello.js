function hello(name) {
    console.log(name + '님, 안녕하세요?');
}

hello('홍길동');

// npm 초기화하기 : npm init
// www.npmjs.com : 원하는 패키지 검색 가능

// npm 사용해 패키지 설치하기
// ansi-colors 패키지 설치하기 : npm install ansi-colors
// 패키지 삭제하기 : npm uninstall ansi-colors

const c = require('ansi-colors');

function hi(username) {
    console.log(c.green(username) + '님, 안녕하십니까?');   
};

hi('아무개');