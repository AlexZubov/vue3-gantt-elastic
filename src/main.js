import { createApp } from 'vue'
import App from './App.vue'

import GanttElastic from "./GanttElastic"
import GanttElasticHeader2 from "./components/GanttElasticHeader2"

const app = createApp(App);

app.use(GanttElastic)

app.mount('#app')
