<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal" >
      <h1>Modal Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem possimus mollitia cumque culpa earum facere, tempora placeat quas quam eius laboriosam quia dolorem totam iusto assumenda voluptas, dicta sint?</p>
    </Modal>
  </div>
  <br>
  <button @click="toggleModal">show modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    let ctx = {
      title: "My First Vue App.",
      showModal: false,
    };

    return ctx;
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
