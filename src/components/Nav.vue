<template>
  <div id="nav">{{ msg }}
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>  
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: 'nav',
  props: {
    msg: String
  }

}
</script>


<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FF3232;
}
</style>