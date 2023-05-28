<template>
    <p class="text_display__p">
      <span class="text_display__span"
            v-for="(char, index) in text"
            :key="index"
            :class="{
          'text_display__selected': index === selected && !error,
          'text_display__error': index === selected && error,
          'text_display__done': index < selected
        }"
      >
        {{ char }}
      </span>
    </p>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";

const props = defineProps({
    text: String
})

const store = useStore();

const error = computed(() => store.getters.getError)
const selected = computed(() => store.getters.getSelected)
</script>

<style scoped>
.text_display__p {
    font-family: 'Georgia', sans-serif;
    font-size: 26px;
    line-height: 1.6;
}
.text_display__span {
    padding-right: 1px;
}
.text_display__done {
    color: limegreen;
}
.text_display__selected {
    background-color: limegreen;
    color: whitesmoke;
    border-radius: 4px;
}
.text_display__error {
    background-color: red;
    color: whitesmoke;
    border-radius: 4px;
}
</style>