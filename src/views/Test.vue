<template>
    <div class="test">
        <Header class="header" />
        <TypingTest v-if="!isLoading" :language="selectedLanguage" :text-value="text"/>
        <my-dialog v-else :show="isLoading">
            <div></div>
            <Loader/>
            <div></div>
        </my-dialog>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useTextFetching} from "../hooks/useTextFetching.ts";
import TypingTest from "../components/TypingTest.vue";
import MyDialog from "../components/UI/MyDialog.vue";
import Loader from "../components/icons/Loader.vue";
import {key} from "../store";
import Header from "../components/Header.vue";
import {LanguageValue} from "../types";

const {text, isLoading, selectedLanguage} = useTextFetching();

const store = useStore(key);
const router = useRouter();
const route = useRoute();

const language = computed<LanguageValue>({
    get: () => store.getters.getSelectedLanguage,
    set: (value: LanguageValue) => store.commit("setSelectedLanguage", value)
});

selectedLanguage.value = <LanguageValue>route.params.lang
language.value = <LanguageValue>route.params.lang

watch(
    () => language.value,
    (newValue) => {
        router.replace(`/test/${newValue}`)
        selectedLanguage.value = newValue
    }
);
</script>

<style scoped>
.test {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}
.header {
    margin-top: 100px;
}
</style>

