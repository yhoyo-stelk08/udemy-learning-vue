const app = Vue.createApp({
  data() {
    let context = {
      visible: true,
      persons: [
        {
          name: "Eko Prasetyo",
          age: 40,
          city: "Makassar",
          isFav: false,
        },
        {
          name: "Ucup",
          age: 25,
          city: "Ambon",
          isFav: false,
        },
        {
          name: "Reyhan",
          age: 17,
          city: "Ternate",
          isFav: false,
        },
      ],
    };
    return context;
  },
  methods: {
    toggleVisibility(e) {
      // console.log(e.type);
      this.visible = !this.visible;
    },
    toggleFav(fav, index) {
      // console.log("initial isFav: " + fav, index);
      this.persons[index].isFav = !fav;
      // console.log("after change fav: " + this.persons[index].isFav);
    },
  },
});

app.mount("#app");
