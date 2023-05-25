<template>
    <div class="typing_test">
        <TextDisplay :text="text" :selected="selected" :error="error"/>
        <Stats :errorCount="errorCount" :selected="selected" :time="time"/>
        <h3 v-if="error" class="typing_test__error">Неправильная буква</h3>
        <Modal variant="danger" :visible="modal">
            <p class="text-center text-info">Так держать!</p>
            <StatsAccuracy :errorCount="errorCount" :selected="selected"/>
            <StatsSpeed :time="time" :selected="selected"/>
        </Modal>
    </div>
</template>

<script setup>
import TextDisplay from "./TextDisplay.vue";
import Stats from "./Stats.vue";
import {onBeforeMount, onBeforeUnmount, onMounted, ref, watch} from "vue";
import Modal from "./Modal.vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import StatsSpeed from "./StatsSpeed.vue";


const error = ref(false)
const selected = ref(0)
const date = ref(0)
const time = ref(0)
const errorCount = ref(0)

const modal = ref(false)

const props = defineProps({
    textValue: {
        type: String,
        required: true,
    }
})
const text = ref("")

// мы можем выызвать Date.now() с интервалом в 500 если date.value не равно нулю чтобы всегда считалось время
// и внутри интервала прирванивать time.value = Date.now() - date.value
// тогда скорость будет обновялться независимо от наших действий

const handleKeyPress = (event) => {
    if (text.value[selected.value] === event.key) {
        if (selected.value === 0) {
            date.value = Date.now()
        }
        if (selected.value === text.value.length - 1) {
            time.value = Date.now() - date.value
            modal.value = true
            // Для алерта придется использовать глобальный стор чтоб был досттуп к скорости ото всех элементов
            // Тут должно вылезти модальное окно
            // alert(speed.value + ' знаков в минуту')
            window.removeEventListener('keypress', handleKeyPress)
        }
        error.value = false;
        selected.value = selected.value + 1
        time.value = Date.now() - date.value
    } else {
        error.value = true;
        errorCount.value = errorCount.value + 1;
        time.value = Date.now() - date.value
    }
}

watch(
    () => [props.textValue],
    () => {
        text.value = props.textValue
        window.addEventListener("keypress", handleKeyPress)
    },
    {immediate: true}
);
onBeforeUnmount(() => {
    window.removeEventListener('keypress', handleKeyPress)
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

.typing_test__error {
    color: red;
}
</style>