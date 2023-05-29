<template>
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
</template>

<script lang="ts" setup>
import {computed, watch} from "vue";
import BullseyeIcon from "./icons/Bullseye.vue";
import {useStore} from "vuex";
import {key} from "../store";

const store = useStore(key);

const error = computed<boolean>(() => store.getters.getError)
const selected = computed<number>(() => store.getters.getSelected)
const accuracy = computed<number>(() => store.getters.getTypingAccuracy)

watch(
    () => [error.value, selected.value],
    () => {
        store.dispatch("calculateAccuracy")
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

.icon_wrap {
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

.accuracy {
    color: deepskyblue;
}

.error {
    color: red;
}

.accuracy_value {
    font-size: 36px;
    padding: 1px;
    font-weight: bolder;
}

.accuracy_text {
    font-size: 12px;
    padding: 1px;
    font-weight: bolder;
}
</style>