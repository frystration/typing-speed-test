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
import {computed, ref, watch} from "vue";
import BullseyeIcon from "./icons/Bullseye.vue";
import {useStore} from "vuex";

const store = useStore();

const error = computed(() => store.getters.getError)
const accuracy = computed(() => store.getters.getTypingAccuracy)

watch(
    () => [error.value],
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
}

.accuracy_text {
    font-size: 12px;
    padding: 1px;
}
</style>