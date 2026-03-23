// Promise 체인 - 비동기 작업의 순차 실행

let p = new Promise((resolve, reject) => {
    resolve("first!")
})

p.then((msg) => {
    console.log(msg);
    // throw new Error("## 에러!!")
    return "second";
})
.then((msg) => {
    console.log(msg);
    return "third";
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log("오류 발생 ==> " + error);
})