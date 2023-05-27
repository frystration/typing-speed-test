<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped>
.button {
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.125);
    border-radius: 15px;
    border-color: transparent;
    color: whitesmoke;
}
</style>