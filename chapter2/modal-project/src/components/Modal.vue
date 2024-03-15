<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Default Slot Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
}

.modal {
  background: white;
  border-radius: 10px;
  margin: 100px auto;
  padding: 20px;
  width: 400px;
}

.modal h1 {
  color: lightgreen;
  border: none;
  padding: 0;
}

.modal.sale {
  background: rgb(42, 80, 110);
  color: white;
}

.modal.sale h1 {
  color: whitesmoke;
}
</style>
