<template>
  <div class="block">Click Me</div>
</template>

<script>
  export default {
    props: ["delay"],
  };
</script>

<style>
.block {
  background-color: darkgreen;
  border-radius: 10px;
  color: wheat;
  height: 200px;
  margin: 40px auto;
  padding: 100px 0;
  text-align: center;
  width: 400px;
}
</style>
