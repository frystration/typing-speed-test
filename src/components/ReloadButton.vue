<template>
    <my-button @click="$router.go(0)" class="button">
            <div class="icon_wrap">
                <RepeatIcon :size="26" class="icon"/>
                <span class="icon_text">ЗАНОВО</span>
            </div>
    </my-button>
</template>

<script lang="ts" setup>
import RepeatIcon from "./icons/Repeat.vue";
import MyButton from "./UI/MyButton.vue";
</script>

<style scoped>
.button {
    cursor: pointer;
    color: limegreen;
    fillColor: limegreen;
    height: 70px;
}
.icon_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.icon {
    padding: 2px;
}
.icon_text {
    font-size: 26px;
    font-weight: bold;
}
.button:hover {
    color: green;
    fillColor: green;
}
</style>