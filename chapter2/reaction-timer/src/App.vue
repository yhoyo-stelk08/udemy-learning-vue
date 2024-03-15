<template>
  <h1>Reaction Timer Project</h1>
  <button :disabled="isPlaying"  @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay"></Block>
</template>

<script>
import Block from './components/Block.vue';
export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 7000;
      this.isPlaying = true;
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
