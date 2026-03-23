/*
    Proxy
    - 객체의 속성을 읽어오거나 설정하는 작업을 가로채기 위해 래핑할 수 있도록 하는 객체
    - 객체의 속성에 접근할 때 개발자가 원하는 지정된 작업을 수행하도록 할 수 있음
    - Vue 내부에서 Proxy를 사용
      : 개발자가 직접 개발하지 않음
    - 반응성(reactivity) 지원을 위한 기법

    let vm = Vue.createApp({
        name : "App",
        data() {
            return 모델데이터객체;     모델데이터객체는 Proxy 객체로 래핑됨
            }
        }).mount('#app');
*/

// Proxy로 객체 래핑하기
let obj = { name : "홍길동", age : 20 };
const proxy = new Proxy(obj, {
    get: function(target, key) {
        console.log("## get " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다.`);
        return target[key];
    },
    set : function(target, key, value) {
        console.log("## set " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다.`);
        target[key] = value;
        return true
    }
})

console.log(proxy.name);     // 읽기 작업 get 호출
proxy.name = "이몽룡";       // 쓰기 작업 set 호출
proxy.age = 30;              // 쓰기 작업 set 호출

console.log(proxy);