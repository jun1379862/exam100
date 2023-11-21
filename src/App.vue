<script setup>
import Intro from './components/intro.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/city-logo.png" />
  </header>
  
  <main>
    <Intro />
  </main>
</template>





<style scoped>

header {
  line-height: 1.5;
  text-align: center;
}
.logo{
  margin: auto;
  width: 100px;

}

@media (min-width: 1024px) {

}
</style>
