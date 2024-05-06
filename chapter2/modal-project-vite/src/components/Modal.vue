<template lang="">
  <div class="backdrop-blur-2xl backdrop-opacity-45">
    <div class="modal">
      <h1 class="text-3xl font-black mb-5 text-teal-500">{{ header }}</h1>
      <p class="text-black">modal content</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['header'],
};
</script>
<style>
.modal {
  @apply w-[400px] p-5 my-[100px] mx-auto bg-slate-100 rounded-xl;
}
</style>
