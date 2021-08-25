<template>
  <div class="template-container">
    <body class="body-container"></body>
    <div class="wrapper">
      <header>
        <h4 class="article header_title">
          Лучшие астрологи и экстрасенсы Румынии
        </h4>
        <p class="article header_forecast">Точность прогноза: 97%</p>
      </header>
      <main>
        <div class="astrologer_container">
          <div class="astrologer-background"></div>
          <img
            class="astrologer-avatar"
            src="../assets/astrologer_avatar.png"
            alt="Астролог"
          />
        </div>
        <p class="main_question">
          Вас беспокоит вопрос о том,
          <span class="main_question__uppercase"
            >когда Вы покинете этот Мир и при каких обстоятельствах?</span
          >
        </p>
        <div class="input input_button">
          <div class="colorTransfusion"></div>
          <p class="input_button_title">Да</p>
        </div>
        <div class="input input_button">
          <div class="colorTransfusion"></div>
          <p class="input_button_title">Нет</p>
        </div>
        <p class="article main_article">Онлайн предсказание</p>
      </main>
      <aside>
        <div class="aside-opensecret">
          <img
            class="aside-opensecret__image"
            src="../assets/aside_hands.png"
            alt=""
          />
          <p class="aside-opensecret_text involvementText">
            Позвольте нам раскрыть эту волнующую тайну и <br />
            <span class="involvementText_gold involvementText_gold_bold"
              >с точностью определить дату и время вашей смерти,</span
            >
            а также предшествующую этому событию причину
          </p>
        </div>
        <div class="aside-proveit-container">
          <div class="aside-proveit-background-container"></div>
          <p class="aside-proveit-text involvementText">
            Многие не верят предсказаниям и мы решили доказать каждому,<br />
            <span class="involvementText_gold"
              >что прогноз может изменить жизнь любого человека!</span
            >
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  methods: {
    smoothEmergence(pageYOffset) {
      let openSecredBlock = document.querySelector(".aside-opensecret");
      let proveIt = document.querySelector(".aside-proveit-container");
      let viewport = document.documentElement.clientHeight;
      if (pageYOffset + viewport > openSecredBlock.offsetTop) {
        openSecredBlock.classList.add("smoothEmergence");
      }
      if (pageYOffset + viewport > proveIt.offsetTop) {
        proveIt.classList.add("smoothEmergence");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => this.smoothEmergence(pageYOffset));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () =>
      this.smoothEmergence(pageYOffset)
    );
  },
};
</script>
<style scope>
@import "../assets/styles/main.css";
@import "../assets/styles/components/steps.css";
@import "../assets/styles/components/fearOfDying.css";
@import "../assets/styles/components/DateOfBirth.css";
@import "../assets/styles/components/loader-spinner.css";
@import "../assets/styles/components/ShockAccept.css";
@import "../assets/styles/components/loader-bar.css";
@import "../assets/styles/components/QuestionsResult.css";
@import "../assets/styles/mediarequests.css";
</style>
