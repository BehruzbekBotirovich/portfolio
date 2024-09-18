import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import AOS from 'aos';
import 'aos/dist/aos.css';

import Antd from 'ant-design-vue'; // ANT

import './assets/tailwind.css'; // Import Tailwind CSS

AOS.init({ once: true });

app.use(Antd);

app.mount('#app')
