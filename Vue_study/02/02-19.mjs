let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
// 추가
const getBase = () => base;

export { add, multiply };
// 추가
export default getBase;

/*
    let base = 100;
    export const add = (x) => base + x;
    export const multiply = (x) => base * x;

    export default () => base;
*/


