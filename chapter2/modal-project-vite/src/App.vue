<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Modal Project With Vue + Vite + Tailwind',
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
    },
  },
};
</script>

<template>
  <h1
    class="text-red-500 border-b border-solid border-stone-300 pb-2 mb-3 inline-block"
  >
    {{ title }}
  </h1>
  <input type="text" ref="name" class="space-y-3 my-3" />
  <button
    @click="handleClick"
    class="p-2 my-2 mx-3 bg-slate-500 hover:bg-slate-700 border-none"
  >
    Click Me
  </button>
</template>

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
