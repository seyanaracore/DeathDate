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
            src="../assets/images/astrologer_avatar.png"
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
            src="../assets/images/aside_hands.png"
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
<style>
:root {
  --avatarBackground: 344px;
}
.body-container {
  position: absolute;
  background: top right url("../assets/images/top_background.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 1098px;
  margin-top: -50px;
}
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header_title {
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 22px;
  margin-top: 36px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.header_forecast {
  font-size: 25px;
  line-height: 29px;
  margin-top: 12px;
  margin-bottom: 64px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.astrologer_container {
  width: 100%;
  height: var(--avatarBackground);
  display: flex;
  justify-content: center;
  align-items: center;
}
.astrologer-avatar {
  width: 238px;
  height: 238px;
  position: absolute;
}
.astrologer-background {
  width: inherit;
  opacity: 0.2;
  height: inherit;
  background: center url("../assets/images/astrologer_background.svg") no-repeat;
  background-size: var(--avatarBackground) var(--avatarBackground);
}
.main_question {
  font-weight: normal;
  max-width: 500px;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #f6c866;
  margin-top: 23px;
  margin-bottom: 40px;
}
.main_question__uppercase {
  text-transform: uppercase;
}
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.involvementText {
  color: white;
  font-weight: normal;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
}
.involvementText_gold {
  color: #f6c866;
}
.involvementText_gold_bold {
  font-weight: 500;
}
.aside-opensecret {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin-top: 146px;
  position: relative;
  height: 437px;
  margin-bottom: 69px;
  width: 442px;
  opacity: 0;
}
.aside-opensecret__image {
  width: 135px;
  height: 135px;
  position: absolute;
  margin-top: -67.5px;
}
.aside-opensecret_text {
  margin-top: 128px;
  max-width: 365px;
}
.aside-proveit-container {
  width: 100%;
  height: 606px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
}
.aside-proveit-background-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/images/proveit_background.jpg") no-repeat;
  background-size: cover;
  opacity: 0.2;
  margin-top: -190px;
  padding-top: 190px;
}
.aside-proveit-text {
  margin: 0;
  max-width: 380px;
}
.template-container {
  overflow: hidden;
  position: relative;
}
@media (max-width: 1000px) {
  .aside-proveit-background-container {
    margin-top: 0px;
    padding-top: 0px;
    padding: 0 89px;
  }
  .body-container {
    width: 310%;
    margin-left: -130%;
    height: 50%;
    margin-top: -50px;
  }
}
@media (max-width: 550px) {
  :root {
    --avatarBackground: 199px;
  }
  .body-container {
    height: 55%;
  }
  .header_title {
    font-size: 12px;
    line-height: 14px;
    margin-top: 21px;
    margin-bottom: 11px;
  }
  .header_forecast {
    font-size: 20px;
    line-height: 23px;
    margin-top: 7px;
    margin-bottom: 37px;
  }
  .astrologer-avatar {
    width: 137px;
    height: 137px;
  }
  .main_question {
    font-size: 16px;
    line-height: 25px;
    margin-top: 13px;
    margin-bottom: 30px;
    width: 288px;
  }
  .aside-opensecret {
    margin-top: 82px;
    margin-bottom: 40px;
    width: 255px;
    height: 252px;
  }
  .aside-opensecret__image {
    width: 78px;
    height: 78px;
    margin-top: -36.5px;
  }
  .aside-opensecret_text {
    font-size: 16px;
    line-height: 25px;
    margin-top: 58px;
  }
  .aside-proveit-container {
    height: 331px;
  }
  .aside-proveit-text {
    font-size: 16px;
    line-height: 25px;
    width: 219px;
  }
  .main_article {
    font-size: 12px;
  }
}
</style>
