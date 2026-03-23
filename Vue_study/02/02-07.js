/*
    구조분해 할당(Destructing Assignment)
    : 배열, 객체의 값들을 추출하여 한 번에 여러 변수에 할당할 수 있는 기능
*/

let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = { name : "홍길동", age : 20, gender : "M" };
let { name : n, age : a, gender } = p1;
console.log(n, a, gender);