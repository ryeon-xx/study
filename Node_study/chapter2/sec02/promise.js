/*
    프라미스 Promise
    Promise 객체를 생성할 때 비동기 작업 함수를 전달
    - 비동기 작업함수의 매개변수
      : resolve 함수 : 작업 성공시 호출할 함수
      : reject 함수 : 작업 실패시 호출할 함수

    - Promise 객체의 메서드
      : then(result) - 작업 성공시 resolve 함수의 매개변수가 전달
      : catch(err) - 작업 실패시 reject 함수의 매개변수가 전달
*/

let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if (likePizza) {
        resolve ('피자를 주문합니다.');
    } else {
        reject ('피자를 주문하지 않습니다.')
    }
});

pizza
.then((result) => console.log(result))
.catch((err) => console.log(err));