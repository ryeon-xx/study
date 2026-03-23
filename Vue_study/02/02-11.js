let obj = { result : 0 };

obj.add = function(x,y) {
    this.result = x + y;
}

let add2 = obj.add;

console.log(add2 === obj.add);  // true,  동일한 함수

add2(3,7); // 전역변수 result에 10이 할당됨.
console.log(obj);  // { result : 0 }
console.log(result);  // 10