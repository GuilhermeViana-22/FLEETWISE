import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vScrollReveal from './directives/v-scroll-reveal.js';
import './assets/animations.css';
// Import your global CSS styles here
const app = createApp(App);
app.use(router);
app.directive('scroll-reveal', vScrollReveal);
app.mount('#app');
