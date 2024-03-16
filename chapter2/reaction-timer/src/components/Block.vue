<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
  export default {
    props: ["delay"],
    data() {
      return {
        showBlock: false,
        timer: null,
        reaction_time: 0,
      };
    },
    mounted() {
      setTimeout(() => {
        this.showBlock = true;
        this.startTimer();
      }, this.delay);
      // console.log('delay: ' + this.$props.delay)
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.reaction_time += 10;
        }, 10);
        // console.log('timer start: ' + this.timer)
      },
      stopTimer() {
        clearInterval(this.timer);
        // console.log('timer stop : ' + this.timer)
        // console.log('reaction time: '+ this.reaction_time)
        this.$emit("finish", this.reaction_time);
      },
    },
  };
</script>

<style>
  .block {
    background-color: darkgreen;
    border-radius: 10px;
    color: wheat;
    margin: 40px auto;
    padding: 100px 0;
    text-align: center;
    width: 400px;
  }
</style>
