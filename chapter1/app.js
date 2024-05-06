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
    },
    handleEvent(e, data){
      const { type } = e
      console.log('event type: ', type)
      if (data) {
        console.log(data)
      }
    },
   },
})

app.mount('#app')