<template>
  <div class="res">
    <p>Your reaction time is {{ this.result }} ms</p>
    <p>{{ this.rank }}</p>
  </div>
</template>

<script>
  export default {
    props: ["result"],
    data() {
      return {
        rank: null,
      };
    },
    methods: {
      resultRank() {
        if (this.result < 250) {
          this.rank = "You have a fastest finger !!!";
        } else if (this.result < 400) {
          this.rank = "Meehh... Just normal..";
        } else {
          this.rank = "You are Slowpoke Maan.. !!";
        }
      },
    },
    mounted() {
      this.resultRank();
    },
  };
</script>

<style>
  .res {
    background: rgb(30, 78, 210);
    border-radius: 20px;
    color: beige;
    margin: 100px auto;
    padding: 100px;
    width: 200px;
  }
</style>
