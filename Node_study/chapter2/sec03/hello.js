const hello = (name) => {
    console.log(`${name}님, 안녕하십니까?`);
};


// 모듈 내보내기
// hello 함수 내보내기
module.exports = hello;

/*
   exports.hello = (name) => {
    console.log(`${name}님, 안녕하십니까?`);
    };
*/