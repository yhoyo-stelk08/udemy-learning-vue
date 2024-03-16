<template>
  <h1>Reaction Timer Project</h1>
  <button :disabled="isPlaying" @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay" @finish="finishGame"></Block>
  <Result v-if="showResult" :result="result" />
</template>

<script>
  import Block from "./components/Block.vue";
  import Result from "./components/Result.vue";

  export default {
    name: "App",
    components: { Block, Result },
    data() {
      return {
        isPlaying: false,
        delay: null,
        result: null,
        showResult: false,
      };
    },
    methods: {
      start() {
        this.delay = 1000 + Math.random() * 7000;
        this.isPlaying = true;
        this.showResult = false;
      },
      finishGame(reactionTime) {
        this.result = reactionTime;
        this.isPlaying = false;
        this.showResult = true;
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }
</style>
