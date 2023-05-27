<template>
    <div class="typing_test">
        <TextDisplay :text="text" :selected="selected" :error="error"/>
        <Stats :errorCount="errorCount" :error="error" :selected="selected" :time="time"/>
        <my-dialog v-model:show="showDialog">
            <StatsAccuracy :error="error" :errorCount="errorCount" :selected="selected"/>
            <StatsSpeed :time="time" :selected="selected"/>
            <ReloadButton/>
        </my-dialog>
    </div>
</template>

<script lang="ts" setup>
import TextDisplay from "./TextDisplay.vue";
import Stats from "./Stats.vue";
import {onBeforeUnmount, ref, watch} from "vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import StatsSpeed from "./StatsSpeed.vue";
import ReloadButton from "./ReloadButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

const props = defineProps({
    textValue: {
        type: String,
        required: true,
    }
})

const error = ref(false)
const selected = ref(0)
const startTime = ref(0)
const time = ref(0)
const errorCount = ref(0)
const showDialog = ref(false)
const text = ref("")

let intervalId = null;

// сделать переключение языка и запись в localstorage
// сделать проверку выбранного языка в системе и localstorage
// сделать проверку на капслок
// если капслок или не тот язык то выводим модальное окно
// в модальное окно надо добавить кнопку закрыть возможно убрать закрытие по клику вне окна

const handleKeyPress = (event) => {
    if (text.value[selected.value] === event.key) {
        if (selected.value === 0) {
            startTime.value = Date.now()
            intervalId = setInterval(() => {
                time.value = Date.now() - startTime.value
            }, 400)
        }
        if (selected.value === text.value.length - 1) {
            showDialog.value = true
            // Для алерта придется использовать глобальный стор чтоб был досттуп к скорости ото всех элементов
            window.removeEventListener('keypress', handleKeyPress)
            clearInterval(intervalId)
        }
        error.value = false;
        selected.value = selected.value + 1
    } else {
        error.value = true;
        errorCount.value = errorCount.value + 1;
    }
}

watch(
    () => [props.textValue],
    () => {
        text.value = <string>props.textValue
        window.addEventListener("keypress", handleKeyPress)
    },
    {immediate: true}
);
onBeforeUnmount(() => {
    window.removeEventListener('keypress', handleKeyPress)
    clearInterval(intervalId)
})
</script>

<style>
.typing_test {
    background-color: lightcyan;
    height: fit-content;
    width: 70%;
    margin: 2em auto;
    padding: 10px 15px;
    border-radius: 15px;
    color: darkslategrey;
    display: grid;
    grid-template-columns: 80% 20%;
}
</style>