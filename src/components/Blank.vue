<template>
  <div class = 'blank'>
    <p>Top of Blank</p>
    <h2>{{msg}}</h2>
    <p>Bottom of Blank</p>
  </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: 'blank',
  props: {
    msg: String
  }
};

</script>

<style scoped>

</style>
