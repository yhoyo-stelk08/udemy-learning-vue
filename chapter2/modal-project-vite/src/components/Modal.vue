<template lang="">
  <div class="backdrop-blur-2xl backdrop-opacity-45 fixed">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <!-- using dynamic class with tailwind -->
      <h1 :class="['text-3xl font-black mb-5 font-serif ', { 'text-white': isSale, 'text-teal-600': !isSale } ]" >{{ header }}</h1>
      <p :class="['text-black font-serif text-2xl' , { 'text-white': isSale, 'text-teal-600': !isSale }]">{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['header', 'text', 'theme'],
  data() {
    return {
      isSale: false,
    }
  },
  methods: {
    checkIsSale() {
      console.log(this.theme)
      if (this.theme === 'sale'){
        this.isSale =  true
      } else {
        this.isSale =  true
      }
    },
  },
  mounted() {
    this.checkIsSale();
  },

};
</script>
<style>
.modal {
  @apply w-[400px] p-5 mx-auto bg-slate-100 rounded-xl text-center;
}

.modal.sale {
  @apply bg-orange-300;
}

</style>
