<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.button {
    width: fit-content;
    height: 50px;
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.125);
    border-radius: 15px;
    border-color: transparent;
    color: whitesmoke;
}
</style>