/*
    자바스크립트의 this 지정
    : 함수나 메서드를 호출할 때 this를 변경할 수 있음
    : bind()
      - 지정한 객체를 this로 미리 연결한(binding) 새로운 함수를 리턴
    : apply(), call()
      - 지정한 객체를 this로 연결한 후 함수를 직접 호출
*/

let add = function(x, y) {
    this.result = x + y;
}

let obj = {};
// 1. apply() 사용
// add.apply(obj, [3,4])
// 2. call() 사용
// add.call(obj,3,4)
// 3. bind() 사용

add = add.bind(obj);
add(3,4)

console.log(obj);    // { result : 7 }