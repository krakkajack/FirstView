<template>
  <h1>BLANKS</h1>
  <div class='blanks'>
    <Blank v-for='blank in blanks' :key= 'blank.id' :blank = 'blank' />
  </div>
</template>

<script>
import BlankService from '@/Services/BlankService.js';
import Blank from '@/components/Blank.vue';

export default {
  name: 'blanks',
  components: {
    Blank
  },

  data() {
    return {
      blanks: null
    };
  },

  created() {
    BlankService.getBlanks()
    .then((response) => {
      this.blanks = response.data;
    })
    .catch((error) => {console.log(error)});
  }
};
</script>

<style scoped>

</style>