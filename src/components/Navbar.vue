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
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";

const languages = [
    { value: 'en', name: 'English' },
    { value: 'ru', name: 'Русский' },
    { value: 'test', name: 'Тест' }
];

const store = useStore();

const selectedLanguage = computed({
    get: () => store.getters.getSelectedLanguage,
    set: (value) => store.commit("setSelectedLanguage", value)
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