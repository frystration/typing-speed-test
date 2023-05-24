<template>
    <div class="stats_wrapper">
        <StatsSpeed :selected="selected" :time="time"/>
        <StatsAccuracy :selected="selected" :errorCount="errorCount"/>
        <ReloadButton />
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

</style>