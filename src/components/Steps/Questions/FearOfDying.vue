<template>
  <div class="step-container step-container__fear wrapper">
    <div class="container">
      <p class="step-title">{{ stepQuestion }}</p>
      <div class="answers-button-block">
        <div
          v-for="button in buttonsContent"
          :key="button"
          @click="
            $eventBus.$emit('setStep', { name: 'ComfortTime' }, 'nextQuestion')
          "
          class="input input_form input_button"
        >
          <div class="colorTransfusion"></div>
          <p class="input_button_title">{{ button }}</p>
        </div>
      </div>
      <p class="article questionIndicator">Вопрос {{ questionNumber }} - 5</p>
      <div class="quote-block">
        <img
          class="quote-rune-image"
          src="../../../assets/rune1.svg"
          alt="Руна"
        />
        <p class="quote quote_fearcomp">
          Вы, конечно, умрете. <br />
          И все, с кем вы знакомы, тоже однажды умрут.
        </p>
        <img
          class="quote-rune-image"
          src="../../../assets/rune2.svg"
          alt="Руна"
        />
      </div>
    </div>
    <div class="backround-items">
      <img
        class="background-items__eye1"
        src="../../../assets/background_eye-1.svg"
        alt=""
      />
      <img
        class="background-items__eye2"
        src="../../../assets/background_eye-2.svg"
        alt=""
      />
    </div>
    <footer class="footer-container footer-container__fear">
      <p class="footer-text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
        FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FearODying",
  data() {
    return {
      buttonsContent: ["Да", "Нет"],
      stepQuestion: "Боитесь ли вы умереть?",
    };
  },
  props: ["questionNumber"],
};
</script>
