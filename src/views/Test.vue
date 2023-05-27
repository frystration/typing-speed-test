<template>
    <div>
        <Header/>
        <TypingTest v-if="!isLoading" :text-value="text"/>
        <my-dialog v-else :show="isLoading">
            <div></div>
            <Loader/>
            <div></div>
        </my-dialog>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import TypingTest from "@/components/TypingTest.vue";
import Loader from "@/components/icons/Loader.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import {useTextFetching} from "@/hooks/useTextFetching.ts";
import {useStore} from "vuex";
import {computed, watch} from "vue";

const { text, isLoading, selectedLanguage } = useTextFetching();

const store = useStore();

const language = computed({
    get: () => store.getters.getSelectedLanguage,
    set: (value) => store.dispatch('setSelectedLanguage', value)
});

watch(
    () => store.getters.getSelectedLanguage,
    (newValue) => {
        selectedLanguage.value = newValue;
    }
);
</script>

<style>
</style>