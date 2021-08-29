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
          src="../../../assets/background_eye-1.svg"
          alt=""
        />
        <img
          class="background-items__eye2 background-items__eye2__slim"
          src="../../../assets/background_eye-2.svg"
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
                { name: 'ShockAccept' },
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
      buttonsContent: ["Да", "Нет", "Иногда"],
      stepQuestion: "Снятся ли вам умершие люди?",
      quoteContent:
        "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!",
    };
  },
  props: ["questionNumber"],
};
</script>
