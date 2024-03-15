<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>Modal Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem
        possimus mollitia cumque culpa earum facere, tempora placeat quas quam
        eius laboriosam quia dolorem totam iusto assumenda voluptas, dicta sint?
      </p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal @close="toggleModal2">
      <h1>Modal2 Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ad
        corrupti voluptas quam rerum eaque est. Beatae, quaerat quidem nam
        repellat ipsam esse ut, nihil, optio necessitatibus accusantium
        similique eum saepe vero libero odit quasi molestias architecto soluta
        perspiciatis fuga sit facere? Voluptatem illum quae deserunt distinctio
        quia eius quibusdam laudantium recusandae veritatis ullam repellendus,
        accusantium cumque at corporis suscipit sunt, inventore iste obcaecati
        laborum ducimus rerum nesciunt! Autem deleniti in praesentium, et
        aliquam dignissimos accusantium, tenetur, adipisci corporis ullam magni
        reprehenderit id fugit ipsum aspernatur? Perspiciatis nulla ullam
        ducimus eveniet nihil hic, molestias totam minus obcaecati nam ab neque?
      </p>
    </Modal>
  </div>
  <br />
  <button @click="toggleModal">show modal 1</button>
  <button @click="toggleModal2">show modal 2</button>
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
      showModal2: false,
    };

    return ctx;
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
