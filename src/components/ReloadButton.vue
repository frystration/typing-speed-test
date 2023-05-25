<template>
    <strong>
        <div class="wrap">
            <div class="button" @click="$router.go(0)">
                <div class="icon_wrap">
                    <RepeatIcon :size="26"  class="icon"/>
                    <span class="icon_text">ЗАНОВО</span>
                </div>
            </div>
        </div>
    </strong>
</template>

<script>
import {defineComponent} from "vue";
import RepeatIcon from "./icons/Repeat.vue";
import SpeedIcon from "./icons/Speed.vue";

export default defineComponent({
    components: {SpeedIcon, RepeatIcon}
})
</script>

<style scoped>
.wrap {
    padding: 5px;
}
.icon {
    padding: 1px;
}
.icon_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.icon_text {
    padding: 1px;
    font-size: 26px;
}
.button {
    cursor: pointer;
    color: limegreen;
    fill-color: limegreen;
}
.button:hover {
    color: green;
    fill-color: green;
}
</style>