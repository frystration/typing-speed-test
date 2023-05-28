<template>
    <div class="wrapper">
        <div class="stats">
            <StatsSpeed />
            <StatsAccuracy  />
        </div>
        <div class="button">
            <ReloadButton />
        </div>
    </div>
</template>

<script lang="ts" setup>
import StatsSpeed from "./StatsSpeed.vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import ReloadButton from "./ReloadButton.vue";
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
</style>