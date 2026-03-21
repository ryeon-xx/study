// 여러 개 내보내기
// 객체로 묶어서 내보냄

const hi = (name) => {
    console.log(`${name}님, 안녕하십니까?`);
};

const goodbye = (name) => {
    console.log(`${name}님, 안녕히 가세요.`);
};

export {hi, goodbye};