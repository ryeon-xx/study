/*
    자바스크립트의 this
    : 메서드, 함수가 호출될 때마다 현재 호출중인 메서드를 보유한 객체가 this로 연결
    : 현재 호출 중인 메서드를 보유한 객체 없다면 전역 객체가 연결
      - 전역 객체
        : 브라우저에서는 window 객체
*/

let obj = { result : 0 };
obj.add = function( x, y ) {
    this.result = x + y;
}

obj.add(3,4)
console.log(obj);