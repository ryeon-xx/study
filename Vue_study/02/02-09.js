/*
    화살표 함수의 형식
    : 기존 함수 표현식 간결화
    : 함수의 본체가 한 줄 문장인 경우
    - { } 생략
    - 한 줄을 표현식으로 해석하여 자동 리턴(return 생략)
*/

const test1 = function(a,b) {
    return a + b;
}

const test2 = (a,b) => {
    return a + b;
};

const test3 = (a,b) => a + b;

console.log(test1(3,4));
console.log(test2(3,5));
console.log(test3(1,2));