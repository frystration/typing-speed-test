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
const props = defineProps({
    text: String,
    selected: {
        type: Number,
        default: 0
    },
    error: Boolean
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');
.text_display__p {
    font-family: 'Nunito', sans-serif;
    font-size: 28px;
    line-height: 1.8;
}
.text_display__span {
    padding: 1px;
}
.text_display__done {
    color: limegreen;
}
.text_display__selected {
    background-color: limegreen;
    padding: 1px;
    color: whitesmoke;
}
.text_display__error {
    background-color: red;
    padding: 1px;
    color: whitesmoke;
}
</style>