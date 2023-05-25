<template>
    <div class="stats_wrapper">
        <StatsSpeed class="wrap" :selected="selected" :time="time"/>
        <StatsAccuracy class="wrap" :selected="selected" :errorCount="errorCount"/>
        <ReloadButton class="wrap wrap_button"/>
    </div>
</template>

<script lang="ts" setup>
import StatsSpeed from "./StatsSpeed.vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import ReloadButton from "./ReloadButton.vue";

const props = defineProps({
    selected: Number,
    time: Number,
    errorCount: Number
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