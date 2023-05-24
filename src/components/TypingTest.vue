<template>
    <div class="typing_test">
        <TextDisplay :text="text" :selected="selected" :error="error"/>
        <Stats :errorCount="errorCount" :selected="selected" :time="time" />
        <h3 v-if="error" class="typing_test__error">мимо</h3>
    </div>
</template>

<script lang="ts" setup>
import TextDisplay from "./TextDisplay.vue";
import Stats from "./Stats.vue";
import data from './text.json'
import {onMounted, ref} from "vue";

const text = ref("")
const error = ref(false)
const selected = ref(0)
const date = ref(0)
const time = ref(0)
const errorCount = ref(0)

onMounted(() => {
    text.value = data[0]
    window.addEventListener("keypress", event => {
        if (text.value[selected.value] === event.key) {
            if (selected.value === 0) {
                date.value = +new Date()
            }
            if (selected.value === text.value.length - 1) {
                time.value = +new Date - date.value
                // Для алерта придется использовать глобальный стор чтоб был досттуп к скорости ото всех элементов
                // Тут должно вылезти модальное окно
                // alert(speed.value + ' знаков в минуту')
            }
            error.value = false;
            selected.value = selected.value + 1
            time.value = +new Date - date.value
        } else {
            error.value = true;
            errorCount.value = errorCount.value + 1;
            time.value = +new Date - date.value
        }
    })
})
</script>

<style>
.typing_test {
    background-color: whitesmoke;
    height: fit-content;
    width: 70%;
    margin: 2em auto;
    padding: 10px 15px;
    border-radius: 15px;
    color: dimgray;
    display: grid;
    grid-template-columns: 85% 15%;
}

.typing_test__error {
    color: crimson;
}
</style>