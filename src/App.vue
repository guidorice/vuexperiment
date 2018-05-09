<template>
  <div id="app">
      <router-view/>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/local-state">local state</router-link> |
      <router-link to="/shared-state">shared state as global event
          bus</router-link> |
      <router-link to="/vuex">vuex flux pattern</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
