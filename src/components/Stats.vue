<template>
    <div class="stats_wrapper">
        <StatsSpeed class="wrap" :selected="selected" :time="time"/>
        <StatsAccuracy :error="error" class="wrap" :selected="selected" :errorCount="errorCount"/>
        <ReloadButton class="wrap wrap_button"/>
    </div>
</template>

<script lang="ts" setup>
import StatsSpeed from "./StatsSpeed.vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import ReloadButton from "./ReloadButton.vue";

const props = defineProps({
    selected: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        default: 0
    },
    errorCount: {
        type: Number,
        default: 0
    },
    error: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.stats_wrapper {
    display: grid;
}
.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>