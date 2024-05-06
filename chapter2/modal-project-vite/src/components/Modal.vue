<template lang="">
  <div class="backdrop">
    <div class="modal">
        <p>modal content</p>
    </div>
  </div>
</template>

<style>
.modal {
    @apply w-[400px] p-5 my-[100px] mx-auto bg-slate-100 rounded-xl
}
.backdrop {
    @apply top-0 fixed bg-slate-900 w-full h-full
}
</style>
