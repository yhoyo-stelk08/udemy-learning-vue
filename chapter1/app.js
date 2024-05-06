const app = Vue.createApp({
   data() {
    return {
      title: 'dynamic value',
      count: 0,
      isShow: true,
      x: 0,
      y: 0,
      books : [
        {title: 'Title 1', author: 'Author 1', img: 'assets/1.jpg', isFav: true},
        {title: 'Title 2', author: 'Author 2', img: 'assets/2.jpg', isFav: false},
        {title: 'Title 3', author: 'Author 3', img: 'assets/3.jpg', isFav: true},
      ],
      url: 'https://www.google.com',
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
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    handleChangeIsFav(e, book) {
      book.isFav = !book.isFav
    }
   },
})

app.mount('#app')