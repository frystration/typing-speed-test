<template>
    <div class="navbar">
        <my-button @click="$router.push('/')">Home</my-button>
        <div class="navbar__buttons">
            <my-select v-model="selectedLanguage" :options="languages" :value="selectedLanguage"></my-select>
            <my-button @click="$router.push(`/test/${selectedLanguage}`)">Пройти тест</my-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";
import MyButton from "./UI/MyButton.vue";
import MySelect from "./UI/MySelect.vue";
import {key} from "../store";
import {languages, LanguageValue} from "../types";

const store = useStore(key);

const selectedLanguage = computed<LanguageValue>({
    get: () => store.getters.getSelectedLanguage,
    set: (value: LanguageValue) => store.commit("setSelectedLanguage", value)
});

</script>

<style scoped>
.navbar {
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: mediumpurple;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__buttons {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
}
</style>