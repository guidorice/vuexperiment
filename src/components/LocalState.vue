// LocalState component:
// example of hello my name is ..., using local state management.

<template>
  <div class="hello">
    <h1>Local State</h1>
      Enter your name: <input title="name" v-model="name"
        placeholder="enter your name">
      <p v-if="name">
        Good to meet you <b>{{ name }}</b>.
        My name is Nobody.
      </p>
  </div>
</template>

<script>
export default {
    name: 'LocalState',
    data: function() {
        return {
            name: '',
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
