<template>
  <div id="app">
    <myheader></myheader>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/math">Math</router-link> |
        <router-link to="/math2">Math2</router-link>
      </div>
      <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/myheader'
import myfooter from './components/myfooter'


export default {
    components: {
      myheader,
      myfooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
