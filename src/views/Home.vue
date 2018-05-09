<template>
    <div>
        <p class="home">
            <img src="../assets/logo.png"/>
        </p>
        <h1>vuexperiment</h1>
        <p>
            Create a “hello your name is” component that echoes your name when
            typed. Make 4 variations of it managing the state in different ways
            (these alternatives are covered in the State Management section
            of the Vue docs).
            <ul>
                <li>Local state in the component</li>
                <li>Shared single-source-of-truth function or variable</li>
                <li>Global event bus</li>
                <li>Using the vuex flux-pattern library</li>
            </ul>
        </p>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    //  HelloWorld
  }
}
</script>
