const app = Vue.createApp({
   data() {
    return {
      title: 'dynamic value',
      count: 0,
      isShow: true,
    }
   },
   methods: {
    changeTitle(passedValue) {
      this.title = passedValue
    },
    showContent() {
      this.isShow = !this.isShow
    }
   },
})

app.mount('#app')