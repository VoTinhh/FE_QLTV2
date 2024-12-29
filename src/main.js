import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Master.vue'
import user from './layout/wrapper/User.vue'
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)
app.use(router)
app.use(Toaster, {
    // One of the options
    position: "top-right",
  });
app.component("default-layout", Default);
app.component("user-layout", user);
app.mount("#app")
