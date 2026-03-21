/* 
    async/await
    - promise의 then을 여러 번 사용하는 경우 복잡해짐
    - 비동기 처리를 동기 스타일로 표현할 수 있는 기법
*/


async function init() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
    } catch (err) {
        console.error(err);
    }
}

init();