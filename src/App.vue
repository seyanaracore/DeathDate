<template>
  <div id="app">
    <Main-comp />
    <Steps />
  </div>
</template>

<script>
import MainComp from "./components/Main.vue";
import Steps from "./components/Steps.vue";
export default {
  name: "App",
  components: {
    MainComp,
    Steps,
  },
};
</script>
<style>
* {
  font-family: Roboto;
  font-style: normal;
}
body {
  margin: 0;
  background-color: #202024;
}
#app {
  overflow: hidden;
}
</style>
