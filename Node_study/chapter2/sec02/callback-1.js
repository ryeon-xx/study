/* 
    방법 : 콜백 함수
    기능 : 함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서를 제어합니다.
           콜백 함수가 많아지면 가독성이 떨어질 수 있습니다. (callback hell)
*/

const order = (coffee, callback) => {
    console.log(`${coffee} 주문 접수`);
    setTimeout(() => {
        callback(coffee);
    }, 3000);
};

const display = (result) => {
    console.log(`${result} 완료!`);
};

// display 함수를 order 함수의 매개변수로 넘기기
order('아메리카노',display)