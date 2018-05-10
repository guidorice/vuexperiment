<template>
    <div class="hello">
        Enter your name:
        <input title="name"
               type="text"
               v-bind:value="name"
               v-on:input="onInput($event.target.value)"
               placeholder="enter your name">
        <p v-if="name">
            Hi <b>{{ name }}</b>.
            My name is {{ greeterName }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Greeter",
        props: [ 'name', 'greeterName', 'onChange' ],
        methods: {
            onInput(name) {
                // TODO: debounce, capitalize, whatever
                this.onChange(name);
            }
        },
    }
</script>

<style scoped>

</style>
