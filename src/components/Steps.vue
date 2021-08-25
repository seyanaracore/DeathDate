<template>
  <div>
    <component
      :loaderType="loaderType"
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

import Loader from "./Loader.vue";

export default {
  name: "Steps",
  components: {
    ComfortTime,
    DateOfBirth,
    DreamsWithTheDead,
    FearOfDying,
    ShockAccept,
    QuestionsResult,
    Loader,
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
    setStep(step, nextQuestion) {
      console.log(step);
      if (nextQuestion) this.questionNumber++;
      if (!step) return;
      this.stepComp = step.name;
      this.loaderType = step.loaderType || "";
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
