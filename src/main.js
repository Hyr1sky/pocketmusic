import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import getVant from './plugins'

const app = createApp(App)
getVant(app)
app.use(naive)
app.use(store)
app.use(router).mount('#app')
