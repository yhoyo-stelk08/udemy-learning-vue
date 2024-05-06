const app = Vue.createApp({
   data() {
    return {
      title: 'dynamic value',
      count: 0,
    }
   },
   methods: {
    changeTitle(passedValue) {
      this.title = passedValue
    }
   },
})

app.mount('#app')