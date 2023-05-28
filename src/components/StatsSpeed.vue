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
import {computed, ref, watch} from "vue";
import SpeedIcon from "./icons/Speed.vue";
import {useStore} from "vuex";

const store = useStore();

const time = computed(() => store.getters.getTime);

const speed = computed(() => store.getters.getTypingSpeed)

const overSpeed = ref(true)

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