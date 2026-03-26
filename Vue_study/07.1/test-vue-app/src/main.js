// import './assets/main.css'

import { createApp } from 'vue'
import App from './App4.vue'
import mitt from 'mitt';
// import CheckBoxItem from './components/CheckBoxItem.vue'

const emitter = mitt();
emitter.on('*',(type, e) => console.log(`## 이벤트 로그 : ${type} ->`,e));

// createApp(App)
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
// .component('CheckBoxItem', CheckBoxItem)
app.mount('#app')
