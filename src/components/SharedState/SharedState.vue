// SharedState/GlobalEvent bus component:
// example of hello my name is ..., using a shared state (single source of truth)

<template>
  <div class="hello">
    <h1>Shared State / Global Event Bus</h1>
      <greeter :name="state.model.name"
        greeterName="Exaybachay"
        :onChange="changeName">
      </greeter>
      <greeter :name="state.model.name"
        greeterName="Exaybachay"
        :onChange="changeName">
      </greeter>
  </div>
</template>

<script>
import Greeter from '../Greeter';

const state = {
    model: { name: '' },
    changeName(newName) {
        if (this.model.name !== newName) {
            this.model.name = newName;
        }
    },
};

export default {
    name: 'SharedState',
    ready() {
        // Must use Vue.set to make sure the new property is reactive
        Vue.set(this.state.model);
    },
    data() {
        return {
            state,
        };
    },
    components: {
        Greeter,
    },
    methods: {
        changeName(name) {
            this.state.changeName(name)
        },
    }
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
