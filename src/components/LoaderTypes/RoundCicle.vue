<template>
  <div class="loader-container">
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="article qustionIndicator">Loading</p>
  </div>
</template>

<script>
export default {
  name: "RoundCicle",
  mounted() {
    setTimeout(() => {
      this.$eventBus.$emit("setStep", { name: "DreamsWithTheDead" });
    }, 2000);
  },
};
</script>
