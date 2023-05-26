<template>
    <div class="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {Navbar}

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: steelblue;
    overflow: auto;
}
</style>
