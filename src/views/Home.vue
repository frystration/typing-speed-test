<template>
    <div class="home">
        <button class="button" @click="$router.push(`/test/${selectedLanguage}`)">
            <span class="home_button_text">Пройти тест</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";
import {key} from "../store";

const store = useStore(key);

const selectedLanguage = computed<string>({
    get: () => store.getters.getSelectedLanguage,
    set: (value) => store.commit("setSelectedLanguage", value)
});

</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.button {
    width: fit-content;
    padding: 20px 30px;
    margin: 10px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 40px;
    border-color: transparent;
    color: whitesmoke;
}
.home_button_text{
    font-size: 56px;
    font-weight: bolder;
    padding: 20px;
}
</style>