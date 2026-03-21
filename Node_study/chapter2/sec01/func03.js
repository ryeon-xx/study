// 화살표 함수
/* 
    (인수, ...) => { 함수 본체 }
    - 인수가 1개인 경우 괄호 생략 가능
      : 인수 => { 함수 본체 }
    - 함수 본체가 1줄인 경우 { } 생략 가능, return 키워드 생략 가능
*/

let getTriangle = (base,height) => base * height / 2;

let getCircle = (radius) => radius * radius * Math.PI;

console.log('삼각형의 면적 : ' + getTriangle(6,4));
console.log('원의 면적 : ' + getCircle(3));

