import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false



Vue.use(new VueSocketIO({
  debug: true,
    connection: 'http://192.168.0.15:1992', //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

const instance = new Vue({
  sockets: {
    connect: function () {
        console.log('socket connected')
        this.$emit('msg2',{msg:"gfdhfgh"});
    },
    customEmit: function (data) {
        console.log(data);
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    emit: function (event: string, data: object) {
        this.$socket.emit(event, data);
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default instance;