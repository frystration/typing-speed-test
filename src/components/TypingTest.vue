<template>
    <div class="typing_test">
        <TextDisplay class="text" :text="text"/>
        <Stats/>
        <my-dialog v-model:show="successDialog">
            <div class="dialog__stats">
                <StatsAccuracy/>
                <StatsSpeed/>
            </div>
            <div class="dialog__reload">
                <ReloadButton/>
            </div>
        </my-dialog>
        <my-dialog v-model:show="languageError">
            <div class="dialog__lang">
                <h2>СМЕНИТЕ РАСКЛАДКУ</h2>
            </div>
            <div class="dialog__reload">
                <ReloadButton/>
            </div>
        </my-dialog>
    </div>
</template>

<script lang="ts" setup>
import TextDisplay from "./TextDisplay.vue";
import Stats from "./Stats.vue";
import {computed, onBeforeUnmount, Ref, ref, watch} from "vue";
import StatsAccuracy from "./StatsAccuracy.vue";
import StatsSpeed from "./StatsSpeed.vue";
import ReloadButton from "./ReloadButton.vue";

import {useStore} from "vuex";
import MyDialog from "./UI/MyDialog.vue";
import isEnglishLetter from "../utils/isEnglishLetter.ts";
import isRussianLetter from "../utils/isRussianLetter.ts";
import {key} from "../store";
import {Language, LanguageValue} from "../types";

interface Props {
    textValue: string
    language: LanguageValue
}

const props = defineProps<Props>()

const store = useStore(key);

const selected = computed<number>(() => store.getters.getSelected);
const error = computed<boolean>(() => store.getters.getError);

const text: Ref<string> = ref("")
const languageError: Ref<boolean> = ref(false)
const successDialog: Ref<boolean> = ref(false)

const handleKeyDown = (event) => {
    const keyPressed = event.key;

    if ((isEnglishLetter(keyPressed) && props.language === Language.RU)
        || (isRussianLetter(keyPressed) && props.language === Language.EN)) {
        languageError.value = true
    }
    if (text.value[selected.value] === keyPressed) {
        if (selected.value === 0) {
            store.dispatch("startTimer");
        }
        if (selected.value === text.value.length - 1) {
            successDialog.value = true
            window.removeEventListener('keypress', handleKeyDown)
            store.dispatch("stopTimer");
        }
        store.commit("setError", false)
        store.commit("incrementSelected");
    } else {
        if (!error.value && selected.value !== 0) {
            store.commit("setError", true)
            store.commit("incrementErrorCount")
        }
    }
}

watch(
    () => [props.textValue],
    () => {
        text.value = <string>props.textValue
        window.addEventListener("keydown", handleKeyDown)
    },
    {immediate: true}
)
onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyDown)
    store.dispatch("stopTimer");
    store.commit("resetState");
})
</script>

<style scoped>
.typing_test {
    background-color: lightcyan;
    height: fit-content;
    width: 65%;
    min-width: 1000px;
    margin: 20px;
    padding: 10px 15px;
    border-radius: 15px;
    color: darkslategrey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.text {
    flex: 1 1 auto;
}

.dialog__stats {
    display: flex;
    flex-direction: row-reverse;
}

.dialog__reload {
    align-self: flex-end;
}

.dialog__lang {
    padding-bottom: 40px;
}
</style>