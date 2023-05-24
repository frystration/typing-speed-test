<template>
    <div>
        <Header/>
        <TypingTest/>
    </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import TypingTest from "./components/TypingTest.vue";
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body {
    background-color: #55c5ff;
}
</style>
