/*
    전개 연산자 (spread operator)
    - ... 연산자
    - 배열이나 객체를 ... 연산자와 함께 객체 또는 배열에서 사용
      -> 객체, 배열 내의 값을 분해된 값으로 전달
    - 기존 값을 복사하거나, 기존 값을 복사하면서 새로운 항목 추가시 사용
      : let obj1 = { ... }
      : let obj2 = obj1
      : let ob3 = { ...obj1 }
      : let ob4 = { ...obj1, color }
*/

let obj1 = { name : "박문수",  age : 29 };
let obj2 =  obj1;           // shallow copy! obj1, obj2는 동일한 객체를 참조
let obj3 = { ...obj1 };     // 객체 내부의 값은 복사하지만 obj3, obj1은 다른 객체
let obj4 = { ...obj1, email : "mspark@gmail.com" };     // 새로운 속성 추가

obj2.age = 19;
console.log(obj1);   // {name : "박문수", age : 19}
console.log(obj2);   // {name : "박문수", age : 19}
console.log(obj3);   // {name : "박문수", age : 29}
console.log(obj1 == obj2);  // true
console.log(obj1 == obj3);  // false

let arr1 = [100, 200, 300];
let arr2 = [ "hello", ...arr1, "world" ];
console.log(arr1); // [100,200,300]
console.log(arr2); // [ "hello", 100, 200, 300, "world"]