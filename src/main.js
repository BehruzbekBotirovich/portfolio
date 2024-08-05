import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/tailwind.css';
import './assets/main.css'; // Импортируй main.css

const app = createApp(App);


app.mount('#app');

AOS.init({
    once: true
});
