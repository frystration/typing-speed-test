<template>
    <strong>
        <div class="wrap">
          <div class="icon_wrap">
              <SpeedIcon :size="26" class="icon"/>
              <span class="icon_text">СКОРОСТЬ</span>
          </div>
          <div class="speed">
               <span class="speed_value">{{ overSpeed ? '∞' : speed }}</span>
               <span class="speed_text">ЗН./МИН</span>
          </div>
      </div>
    </strong>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import roundToTwoDecimals from "../utils/roundToTwoDecimals.ts";
import SpeedIcon from "./icons/Speed.vue";
import BullseyeIcon from "./icons/Bullseye.vue";

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
.speed {
    color: deepskyblue;
}
.speed_value {
    font-size: 36px;
    padding: 1px;
}
.speed_text {
    font-size: 12px;
    padding: 1px;
}
</style>