<template>
    <div class="hello">
        <h1>Local State</h1>
        Enter your name: <input title="name" v-model="store.name"
                                placeholder="enter your name">
        <p v-if="name">
            Good to meet you {{ store.name }}.
            My name is Nobody. He Who Talks Loud, Saying Nothing.
        </p>
    </div>
</template>

<script>
    export default {
        name: "Greeter",
        props: [ 'store' ],
    }
</script>

<style scoped>

</style>
