<template>
  <div class="home">
    <p>Top of Home</p>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Blank msg="Blank Component" />
    <p>Bottom of Home</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Blank from "@/components/Blank.vue";

export default {
  name: "Home",
  components: {
    Blank
  },
};
</script>
