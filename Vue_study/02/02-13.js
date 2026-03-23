/*
    화살표 함수에서의 this
    : 함수를 정의하는 영역의 this를 그대로 전달
*/

let obj = {result : 0};
obj.add = function(x,y) {
    function inner() {
        this.result = x + y;
    }
    inner();    // inner 내부 함수는 일반 함수임(메서드가 아님)
}

obj.add(5,7);

console.log(obj);       // {result : 0}
console.log(result);    // 7