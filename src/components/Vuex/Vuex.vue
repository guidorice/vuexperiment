// Vue example component:
// example of hello my name is ..., using vuex flux pattern library

// the vuex store is available in this.$store because of awesome scaffolding
// done by the vue cli-tools. see ../store.js

<template>
  <div class="hello">
      <h1>Vuex Flux Pattern</h1>
      <greeter
              :name="name"
              greeterName="Exaybachay. He Who Talks Loud, Saying Nothing."
              :onChange="changeName"></greeter>
      <greeter
              :name="name"
              greeterName="Exaybachay. He Who Talks Loud, Saying Nothing."
              :onChange="changeName"></greeter>
      <greeter
              :name="name"
              greeterName="Exaybachay. He Who Talks Loud, Saying Nothing."
              :onChange="changeName"></greeter>
  </div>
</template>

<script>
import Greeter from '../Greeter';

export default {
    name: 'VuexExample',
    components: {
        Greeter,
    },
    methods: {
        changeName(name) {
            this.$store.commit('changeName', name);
        },
    },
    computed: {
        name () {
            return this.$store.state.name
        }
    }
}
</script>

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
