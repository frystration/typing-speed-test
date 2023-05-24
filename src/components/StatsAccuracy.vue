<template>
    <div>
        <div>Точность</div>
        <div>{{ accuracy }}</div>
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
    errorCount: {
        type: Number,
        required: true
    }
})

const accuracy = ref(100)

watch(
    () => [props.selected, props.errorCount],
    () => {
        accuracy.value = roundToTwoDecimals((props .selected / (props .selected + props.errorCount)) * 100)
        if (isNaN(accuracy.value)) {
            accuracy.value = 100
        }
    },
    { immediate: true }
);
</script>

<style scoped>

</style>