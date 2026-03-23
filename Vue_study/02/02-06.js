/*
    가변 파라미터 (Rest Parameter)
    : 전달하는 파라미터의 개수를 가변적으로 적용
    : 매개변수 앞에 ... 연산자 지정
       - 전달된 인수를 매개변수로 매칭한 후,
       - 매칭되지 않은 인수를 모아 배열로 지정 -> 가변 파라미터로 전달
    function func(arg1, arg2, ...argv) { ... }
    : 1개만 지정가능, 마지막 매개변수에만 지정가능
 */

function foodReport(name, age, ...favoriteFoods) {
    console.log(name + "," + age);
    console.log(favoriteFoods);
}

foodReport("이몽룡",20,"짜장면","냉면","불고기");
foodReport("홍길동",16,"초밥");