<template>
  <div class="navbar">
      <div @click="$router.push('/')">TITLE</div>
      <div class="navbar__buttons">
          <div @click="$router.push('/test')">Пройти тест</div>
          <div style="margin-left: 20px" @click="$router.push('/about')">О сайте</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: cornflowerblue;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__buttons {
  margin-left: auto;
    display: flex;
}
</style>