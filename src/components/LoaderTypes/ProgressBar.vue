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
.myProgress {
  width: 0%;
  background: #f6c866;
  height: 100%;
  border-radius: 25px;
}

.myBar {
  max-width: 480px;
  height: 6px;
  border-radius: 25px;
  background-color: white;
  width: 100%;
}
.progressStatus {
  font-weight: 300;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 24px;
  margin-bottom: 12px;
}
.microphone-image {
  width: 45.8%;
  height: 12.15%;
  margin-bottom: 39px;
}
@media (max-width: 550px) {
  .myBar {
    max-width: 259px;
  }
}
</style>
