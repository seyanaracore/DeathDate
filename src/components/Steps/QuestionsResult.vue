<template>
  <div class="resultWrapper">
    <div class="notifyBox-container">
      <div class="notifyBox smoothEmergence">
        <p class="notifyMessage__result">
          Спасибо за Ваши ответы!
          <span class="notifyMessage__result_bold"
            ><br />Мы подготовили для Вас персональную аудио запись с Вашим
            прогнозом.</span
          >
        </p>
      </div>
    </div>
    <p class="resultcomp-text find-events-text">
      Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем
      будущем.
    </p>
    <div class="forecast-block">
      <p class="resultcomp-text resultcomp-text_gold forecast-block-text">
        <span class="notifyMessage__result_bold"
          >Первое значимое событие может произойти</span
        >
        уже {{ futureDay }}, Вам надо быть готовым, что бы последствия не
        оказались необратимыми.
      </p>
    </div>
    <p class="resultcomp-text call-to-button">
      Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
      Прослушайте важную информацию!
    </p>
    <div
      @click="showContent = !showContent"
      class="input input button call-button"
    >
      <div class="colorTransfusion"></div>
      <p class="input_button_title">Позвонить и прослушать</p>
    </div>
    <div v-if="showContent" class="resultContent">
      <p
        v-for="(key, prop) in shortenedData"
        :key="key"
        class="resultcomp-text_gold"
      >
        <span class="notifyMessage__result_bold">{{ prop }}: </span>
        {{ key }}
      </p>
    </div>
    <footer class="footer-container">
      <p class="footer-text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
        FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "QuestionsResult",
  data() {
    return {
      showContent: false,
      fetchedData: null,
    };
  },
  computed: {
    futureDay() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day + 1}.${month}.${year}`;
    },
    shortenedData() {
      let shortenedData = Object.assign({}, this.fetchedData);
      let i = 0;
      for (let key in shortenedData) {
        ++i;
        if (i >= 9) {
          delete shortenedData[key];
        }
      }
      return shortenedData;
    },
  },
  methods: {
    async fetchData() {
      const response = await fetch("https://swapi.dev/api/people/1/").then(
        (result) => result.json()
      );
      this.fetchedData = response;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style>
@import "../../assets/styles/components/QuestionsResult.css";
</style>
