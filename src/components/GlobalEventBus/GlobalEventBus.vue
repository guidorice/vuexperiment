// GlobalEventBus component:
// example of hello my name is ..., using a simple global event bus (store
pattern)

<template>
    <div class="hello">
        <h1>Global Event Bus (store pattern)</h1>

        <greeter myName="xya" yourName="">
        </greeter>

        <!-- instance 1 -->
        <p>
            Enter your name: <input title="name" v-model="name"
                                    placeholder="enter your name">
        </p>

        <p v-if="name">
            Good to meet you {{ name }}.
            My name is Exaybachay. He Who Talks Loud, Saying Nothing.
        </p>
        <hr>
        <p>
            Enter your name: <input title="name" v-model="name"
                                    placeholder="enter your name">
            <!-- instance 2 -->
        </p>
        <p v-if="name">
            Good to meet you {{ name }}.
            My name is Exaybachay. He Who Talks Loud, Saying Nothing.
        </p>
    </div>
</template>

<script>
import store from './store';
import Greeter from './Greeter';

export default {
    name: 'GlobalEventBus',
    data: function() {
        return store;
    },
    components: {
        Greeter,
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
