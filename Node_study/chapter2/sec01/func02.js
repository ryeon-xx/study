// 함수 리터럴 표현으로 정의
// 익명함수
// 변수에 배정해서 사용

var getTriangle = function(base, height) {
    return base * height / 2;
}

console.log('삼각형의 면적 : ' + getTriangle(3,4));