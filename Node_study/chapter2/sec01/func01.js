// 함수의 정의
/* 
    function 함수명(인수, ...) {
    // 함수 로직
    
    return 반환값;
    }
*/

function getTriangle (base, height) {
    return base * height / 2;
}

console.log('삼각형의 면적 : ' + getTriangle(5,2));
