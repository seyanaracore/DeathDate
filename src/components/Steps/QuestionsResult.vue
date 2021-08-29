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
.find-events-text {
  margin-top: 16px;
}
.resultWrapper {
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notifyMessage__result {
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #202024;
  max-width: 91%;
}
.notifyMessage__result_bold {
  font-weight: 700;
}
.resultcomp-text {
  font-weight: 300;
  font-size: 25px;
  line-height: 35px;
  max-width: 422px;
  color: white;
  text-align: center;
}
.resultcomp-text_gold {
  color: #f6c866;
  max-width: 480px;
}
.call-button {
  color: white;
  background: linear-gradient(
    90deg,
    rgba(76, 217, 100, 0.9) -6.2%,
    rgba(50, 185, 73, 0.9) 100%
  );
  margin-bottom: 90px !important;
  width: 395px !important;
}
.forecast-block {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin: 46px 0 31px 0;
  width: 100%;
}
.forecast-block-text {
  margin-top: 64px;
  margin-bottom: 38px;
  max-width: 380px;
}
.call-to-button {
  max-width: 469px;
  margin-bottom: 34px;
}
.resultContent {
  margin-bottom: 35px;
  width: 100%;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 0 35px 0;
}
@media (max-width: 550px) {
  .find-events-text {
    max-width: 219px;
  }
  .resultWrapper {
    max-width: 294px;
  }
  .notifyMessage__result {
    font-size: 14px;
    line-height: 16px;
  }
  .resultcomp-text {
    font-size: 14px;
    line-height: 16px;
  }
  .call-button {
    margin-bottom: 38px !important;
    width: 242px !important;
  }
  .forecast-block {
    margin: 25px 0 19px 0;
    max-width: 259px;
  }
  .forecast-block-text {
    margin-top: 13px;
    margin-bottom: 8px;
  }
  .call-to-button {
    max-width: 233px;
  }
}
</style>
