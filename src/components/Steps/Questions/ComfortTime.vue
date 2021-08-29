<template>
  <div class="step-container">
    <div class="quote-container">
      <p class="quote quote_opacity">
        {{ quoteContent }}
      </p>
    </div>
    <div class="step-container__form">
      <div class="backround-items">
        <img
          class="background-items__eye1 background-items__eye1__slim"
          src="../../../assets/images/background_eye-1.svg"
          alt=""
        />
        <img
          class="background-items__eye2 background-items__eye2__slim"
          src="../../../assets/images/background_eye-2.svg"
          alt=""
        />
      </div>
      <div class="step-title-block">
        <p class="step-title step-title__comfort">
          {{ stepQuestion }}
        </p>
      </div>
      <div class="step-container__form">
        <div class="answers-button-block">
          <div
            v-for="button in buttonsContent"
            :key="button"
            @click="
              $eventBus.$emit(
                'setStep',
                { name: 'DateOfBirth' },
                'nextQuestion'
              )
            "
            class="input input_form input_button"
          >
            <div class="colorTransfusion"></div>
            <p class="input_button_title">{{ button }}</p>
          </div>
        </div>
        <div class="qustionIndicator__block">
          <p class="article qustionIndicator">
            Вопрос {{ questionNumber }} - 5
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComfortTime",
  data() {
    return {
      buttonsContent: ["Утро", "День", "Вечер", "Ночь"],
      stepQuestion: "Когда вы чувствуете себя наиболее комфортно?",
      quoteContent:
        "Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.",
    };
  },
  props: ["questionNumber"],
};
</script>
<style>
@import "../../../assets/styles/components/comfortTime.css";
</style>
