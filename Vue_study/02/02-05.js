/* 기본 파라미터 (Default Parameter)
   : 함수 호출 시 인수를 생략했을 때 가지는 기본값을 지정
   function func(arg1, arg2=기본값, arg3=기본값, ...) { ... }

   반드시 뒷부분에 지정
   : 중간에만 기본값 지정하는 것은 불가능
*/

function addContact(name, mobile, home="없음", address="없음", email="없음") {
    let str = `name = ${name}, mobile = ${mobile}, home = ${home}, address = ${address}, email = ${email}`;
    console.log(str);
}

addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");