<template>
  <div class = 'blank'>
    <p>Top of Blank</p>
    <span>{{blank.id}} {{blank.category}} {{blank.title}}</span>
    <span>{{blank.description}}</span>
    <span>{{blank.location}} {{blank.date}} {{blank.time}}</span>
    <span>{{blank.organizer}}</span>
    <p>Bottom of Blank</p>
  </div>
</template>
<script>

export default {
  name: 'blank',
  props: {
    msg: String,
    blank: {
      blank: Object
    }
  }
};

</script>

<style scoped>

</style>
