<template>
  <div class="flex flex-col md:flex-row justify-center items-center w-full h-screen">
    <h1
    class="text-red-500 border-b border-solid border-stone-300 p-2 text-3xl font-extrabold text-center"
  >
    {{ title }}
  </h1>
  <Modal :header='modalTitle' :text="modalContent" theme="sale"/>
</div>
</template>


<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Modal Project With Vue + Vite + Tailwind',
      modalTitle: 'Sign up for the Giveaway!',
      modalContent: 'Grab your favourite snack..!!'
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
    },
  },
  components: {
    Modal
  }
};
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
