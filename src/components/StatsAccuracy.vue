<template>
    <strong>
        <div
            class="wrap"
        >
            <div class="icon_wrap">
                <BullseyeIcon :size="26" class="icon"/>
                <span class="icon_text">ТОЧНОСТЬ</span>
            </div>
            <div
                :class="{'error': error,'accuracy': !error,}"
            >
                <span class="accuracy_value">{{ accuracy }}</span>
                <span class="accuracy_text">%</span>
            </div>
        </div>
    </strong>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import roundToTwoDecimals from "../utils/roundToTwoDecimals.ts";
import BullseyeIcon from "./icons/Bullseye.vue";

const props = defineProps({
    selected: {
        type: Number,
        required: true
    },
    errorCount: {
        type: Number,
        required: true
    },
    error: {
        type: Boolean,
        required: true
    },
})

const accuracy = ref(100)

watch(
    () => [props.selected, props.errorCount, props.error],
    () => {
        accuracy.value = roundToTwoDecimals((props.selected / (props.selected + props.errorCount)) * 100)
        if (isNaN(accuracy.value)) {
            accuracy.value = 100
        }
    },
    {immediate: true}
);
</script>

<style scoped>
.wrap {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.icon_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.icon {
    padding: 1px;
}
.icon_text {
    padding: 1px;
    font-size: 26px;
}
.accuracy {
    color: deepskyblue;
}
.error{
    color: red;
}
.accuracy_value {
    font-size: 36px;
    padding: 1px;
}

.accuracy_text {
    font-size: 12px;
    padding: 1px;
}
</style>