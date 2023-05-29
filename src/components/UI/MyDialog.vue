<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    show: boolean
}
withDefaults(defineProps<Props>(), {
    show: false
})

const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()
const hideDialog = (): void => {
    emit('update:show', false);
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
    flex-direction: row;
}

.dialog__content {
    margin: auto;
    background: ghostwhite;
    border-radius: 20px;
    min-height: 30%;
    min-width: 50%;
    padding: 40px 25px;
    display: flex;
    align-items: flex-end;
    justify-content:space-between;
    flex-direction: row;
}
</style>