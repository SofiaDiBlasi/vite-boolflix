<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <div class="allContainer">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style>
  .allContainer{
    height: 100vh;
  }
</style>
