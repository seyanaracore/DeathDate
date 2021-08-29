<template>
  <div class="step-container">
    <div class="notifyBox-wrapper">
      <div class="notifyBox smoothEmergence">
        <p v-if="age >= 18 && age < 36" class="notifyMessage">
          {{ forecast[0] }}
        </p>
        <p v-if="age >= 36 && age < 46" class="notifyMessage">
          {{ forecast[1] }}
        </p>
        <p v-if="age >= 46" class="notifyMessage">
          {{ forecast[2] }}
        </p>
      </div>
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
        <p class="step-title step-title__shock">
          {{ stepQuestion }}
        </p>
      </div>
      <div class="step-container__form">
        <div class="answers-button-block">
          <div
            v-for="button in buttonsContent"
            :key="button"
            @click="
              $eventBus.$emit('setStep', {
                name: 'ProgressBar',
              })
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
  name: "ShockAccept",
  data() {
    return {
      buttonsContent: ["Да", "Затрудняюсь ответить"],
      stepQuestion:
        "Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",
      forecast: [
        "По вам скучает очень близкий человек, которого больше нет в мире живых.",
        "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.",
        "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.",
      ],
    };
  },
  props: ["questionNumber", "age"],
};
</script>
<style>
@import "../../../assets/styles/components/ShockAccept.css";
</style>
