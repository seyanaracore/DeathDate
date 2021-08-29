<template>
  <div class="loader-container">
    <img
      class="microphone-image"
      src="../../assets/images/microphone.svg"
      alt="microphone"
    />
    <div class="myBar">
      <div ref="progress" class="myProgress"></div>
    </div>
    <p class="progressStatus">{{ progressStatus }}%</p>
    <p class="article qustionIndicator">Запись сообщения</p>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressStatus: 0,
    };
  },
  methods: {
    moveBar() {
      let id = setInterval(() => {
        if (this.progressStatus >= 100) {
          clearInterval(id);
        } else {
          this.progressStatus++;
          this.$refs.progress.style.width = this.progressStatus + "%";
        }
      }, 60);
    },
  },
  mounted() {
    this.moveBar();
    setTimeout(() => {
      this.$eventBus.$emit("setStep", { name: "QuestionsResult" });
    }, 6500);
  },
};
</script>
<style scope>
@import "../../assets/styles/components/loader-bar.css";
</style>
