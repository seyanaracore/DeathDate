<template>
  <div>
    <component
      @setStep="setStep"
      :is="stepComp"
      :questionNumber="questionNumber"
      @setAge="setAge"
      :age="age"
    ></component>
  </div>
</template>

<script>
import ComfortTime from "./Steps/Questions/ComfortTime.vue";
import DateOfBirth from "./Steps/Questions/DateOfBirth.vue";
import DreamsWithTheDead from "./Steps/Questions/DreamsWithTheDead.vue";
import FearOfDying from "./Steps/Questions/FearOfDying.vue";
import ShockAccept from "./Steps/Questions/ShockAccept.vue";
import QuestionsResult from "./Steps/QuestionsResult.vue";

import Spinner from "./LoaderTypes/Spinner.vue";
import ProgressBar from "./LoaderTypes/ProgressBar.vue";

export default {
  name: "Steps",
  components: {
    ComfortTime,
    DateOfBirth,
    DreamsWithTheDead,
    FearOfDying,
    ShockAccept,
    QuestionsResult,
    Spinner,
    ProgressBar,
  },
  data() {
    return {
      stepComp: "FearOfDying",
      loaderType: "",
      questionNumber: 1,
      age: "",
    };
  },
  methods: {
    setStep(step) {
      if (step.name != "ProgressBar" && step.name != "Spinner")
        this.questionNumber++;
      if (!step) return;
      this.stepComp = step.name;
    },
    setAge(age) {
      this.age = age;
    },
  },
  created() {
    this.$eventBus.$on("setStep", this.setStep);
  },
  beforeDestroy() {
    this.$eventBus.$off("setStep", this.setStep);
  },
};
</script>
