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
<style>
.lds-spinner {
  background: #202024;
  display: inline-block;
  position: relative;
  width: 73px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;
}
.lds-spinner div {
  transform-origin: 36.5px 36.5px;
}
.lds-spinner div:after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 34px;
  width: 7px;
  height: 14px;
  border-radius: 50px;
}
.lds-spinner div:nth-child(1):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12):after {
  animation: lds-spinner 1.2s linear infinite;
  animation-delay: 0s;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
}
@keyframes lds-spinner {
  0% {
    background: #ab780a;
  }
  9% {
    background: #b47e0b;
  }
  18% {
    background: #bc8614;
  }
  27% {
    background: #cf9519;
  }
  36% {
    background: #d79c1e;
  }
  42% {
    background: #d0a342;
  }
  51% {
    background: #dfa03c;
  }
  60% {
    background: #e6a43c;
  }
  70% {
    background: #f6c866;
  }
  79% {
    background: #fdd98b;
  }
  88% {
    background: #ffe3a7;
  }
  100% {
    background: #d7b671;
  }
}
</style>
