<template>
  <p class="text_display__p">
      <span v-for="(char, index) in text">
          <span v-if="index === selected" :class="error ? 'text_display__error' : 'text_display__selected'">
              {{char}}
          </span>
          <span v-else-if="index < selected" class="text_display__span text_display__done">
              {{char}}
          </span>
          <span v-else class="text_display__span">
              {{char}}
          </span>
      </span>
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: String,
    selected: Number,
    error: Boolean
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');

.text_display__p{
    font-family: 'Nunito', sans-serif;
    font-size: 23px;
    line-height: 1.8;
    padding: 1px;
}

.text_display__span{
    padding: 1px;
}

.text_display__done{
    color: lightgreen;
}

.text_display__selected {
    background-color: lightgreen;
    padding: 1px;
    color: whitesmoke;
}

.text_display__error {
    background-color: crimson;
    padding: 1px;
    color: whitesmoke;
}

</style>