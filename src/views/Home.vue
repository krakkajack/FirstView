<template>
  <div class="home">
    <p>Top of Home</p>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Blanks />
    <p>Bottom of Home</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Blanks from "@/components/Blanks.vue";

export default {
  name: "Home",
  components: {
    Blanks
  },
};
</script>
