<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import toggleMixin from "@/components/mixins/toggleMixin.ts";

export default {
    name: "my-dialog",
    mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: ghostwhite;
    border-radius: 12px;
    min-height: 30%;
    min-width: 50%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: row;
}
</style>