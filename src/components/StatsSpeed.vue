<template>
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
</template>

<script lang="ts" setup>
import {computed, Ref, ref, watch} from "vue";
import SpeedIcon from "./icons/Speed.vue";
import {useStore} from "vuex";
import {key} from "../store";

const store = useStore(key);

const time = computed<number>(() => store.getters.getTime);

const speed = computed<number>(() => store.getters.getTypingSpeed)

const overSpeed: Ref<boolean> = ref(true)

watch(
    () => [time.value],
    () => {
        overSpeed.value = speed.value > 999
        store.dispatch("calculateSpeed")
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
    font-weight: bold;
}
.speed {
    color: deepskyblue;
}
.speed_value {
    font-size: 36px;
    padding: 1px;
    font-weight: bolder;
}
.speed_text {
    font-size: 12px;
    padding: 1px;
    font-weight: bolder;
}
</style>