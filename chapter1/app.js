const app = Vue.createApp({
   data() {
    return {
      title: 'dynamic value',
      count: 0,
    }
   },
   methods: {
    changeTitle() {
      this.title = 'title changed'
    }
   },
})

app.mount('#app')