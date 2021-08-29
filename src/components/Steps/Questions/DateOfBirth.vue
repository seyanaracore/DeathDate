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
          <day-input
            :inputsReject="inputsReject"
            :day="day"
            :dayList="dayList"
            @setData="setData"
            @inputListOpen="inputListOpen"
          />
          <month-input
            :inputsReject="inputsReject"
            :month="month"
            :monthsArray="monthsArray"
            @setData="setData"
            @inputListOpen="inputListOpen"
          />
          <year-input
            :inputsReject="inputsReject"
            :year="year"
            :yearOffset="yearOffset"
            @setData="setData"
            @inputListOpen="inputListOpen"
          />
        </div>
        <div @click="formValidation" class="input input_form input_button">
          <div class="colorTransfusion"></div>
          <p class="input_button_title">Далее</p>
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
//DayJS
import { getNameMonth, getDaysInMonth, getActYear } from "../../dayJS";
import dayInput from "./DateOfBirthInputs/dayInput.vue";
import monthInput from "./DateOfBirthInputs/monthInput.vue";
import yearInput from "./DateOfBirthInputs/yearInput.vue";
export default {
  components: { dayInput, monthInput, yearInput },
  name: "DateOfBirth",
  props: ["questionNumber"],
  data() {
    return {
      day: "День",
      month: "Месяц",
      year: "Год",
      monthsArray: [],
      inputsReject: { day: false, month: false, year: false },
      stepQuestion: "Когда вы чувствуете себя наиболее комфортно?",
      quoteContent:
        "Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.",
    };
  },
  methods: {
    setData(dataName, prop) {
      this[dataName] = prop;
    },
    getMonths() {
      for (let i = 1; i <= 12; i++) {
        let monthName = getNameMonth(i);
        monthName = monthName[0].toUpperCase() + monthName.slice(1);
        this.monthsArray.push(monthName);
      }
    },
    inputListOpen(formInput) {
      document.querySelector(`#${formInput}`).classList.toggle("isListDisplay");
    },
    inputsValidation() {
      const inputs = {
        dataInputs: { year: this.year, month: this.month, day: this.day },
        inputsReject: { year: "Год", month: "Месяц", day: "День" },
      };
      let checkInputs = { year: false, month: false, day: false };
      for (let input in checkInputs) {
        if (inputs.dataInputs[input] != inputs.inputsReject[input])
          checkInputs[input] = true;
      }
      return checkInputs;
    },
    getMonthInNumber() {
      return this.monthsArray.indexOf(this.month);
    },
    calculateAge() {
      let { year, day } = this;
      let now = new Date();
      let dob = new Date(`${year}, ${this.getMonthInNumber()}, ${day}`);
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
      let age;
      age = today.getFullYear() - dob.getFullYear();
      if (today < dobnow) {
        age = age - 1;
      }
      return age;
    },
    formValidation() {
      const checkedInputs = this.inputsValidation();
      let { inputsReject } = this;
      let formComplete = true;
      for (let input in checkedInputs) {
        if (checkedInputs[input]) {
          !formComplete ? false : (formComplete = true);
          inputsReject[input] = false;
        } else {
          formComplete = false;
          inputsReject[input] = true;
        }
      }
      if (formComplete) {
        let age = this.calculateAge();
        this.$emit("setAge", age);
        this.$eventBus.$emit(
          "setStep",
          {
            name: "Loader",
            loaderType: "RoundCicle",
          },
          "nextQuestion"
        );
      }
    },
    inputUnfocus(e) {
      const activeInput = document.querySelector(".isListDisplay");
      const target = e.target;
      if (!activeInput) return;
      if (!target.closest(".isListDisplay")) {
        this.inputListOpen(activeInput.id);
      }
    },
  },
  watch: {
    dayList() {
      this.day = "День";
    },
  },
  computed: {
    dayList() {
      let { year } = this;
      let checkedInputs = this.inputsValidation();
      if (!checkedInputs.year || !checkedInputs.month) return 0;
      let monthNumber = this.getMonthInNumber();
      return getDaysInMonth(year, monthNumber);
    },
    yearOffset() {
      return getActYear() - 18;
    },
  },
  mounted() {
    this.getMonths();
    window.addEventListener("click", this.inputUnfocus);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.inputUnfocus);
  },
};
</script>
