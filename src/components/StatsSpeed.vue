<template>
    <div>
        <div>Скорость</div>
        <div>{{ overSpeed ? '∞' : speed }}</div>
    </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import roundToTwoDecimals from "../utils/roundToTwoDecimals.ts";

const props = defineProps({
    selected: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

const speed = ref(0)
const overSpeed = ref(true)

watch(
    () => [props.selected, props.time],
    () => {

        const speedV = roundToTwoDecimals((props.selected / props.time) * 60000);
        if (speedV > 500 || isNaN(speedV)) {
            overSpeed.value = true
        } else {
            overSpeed.value = false
            speed.value = speedV
        }
    },
    { immediate: true }
);
</script>

<style scoped>

</style>