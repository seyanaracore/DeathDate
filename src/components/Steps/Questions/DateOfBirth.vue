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
import { getNameMonth, getDaysInMonth, getActYear } from "../../../utils/dayJS";
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
      stepQuestion: "Укажите свою дату рождения:",
      quoteContent:
        "Уже совсем скоро Вы узнаете много интересного о своем будущем!",
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
        this.$eventBus.$emit("setStep", {
          name: "Spinner",
        });
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
<style>
.birthday-form-container {
  margin-top: 48px;
}
.input_container {
  width: 100%;
  height: 100%;
  position: absolute;
}
.input_birthday-form {
  z-index: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgb(0 0 0 / 25%);
  color: #202024;
  background: linear-gradient(
    90deg,
    rgba(228, 228, 228, 0.9) -6.2%,
    rgba(203, 203, 203, 0.9) 100%
  );
}
#dayInput {
  z-index: 5;
}
#monthInput {
  z-index: 4;
}
#yearInput {
  z-index: 3;
}
.input_birthday-form_container {
  width: 100%;
  position: relative;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}
.input_birthday-form_container:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
}
.input_birthday-form_container_field-arrow {
  position: absolute;
  top: 50%;
  right: 6.15%;
}
.input_birthday-form_container_item {
  padding: 10px 0;
  margin: 0;
  border-top: 1px solid gray;
}
.input_button_title-list {
  display: none;
  position: absolute;
  width: 100%;
  top: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -4px 4px rgb(0 0 0 / 25%);
  border-radius: 0 0 38px 38px;
  background: #e5e5e5;
  text-align: center;
}
.isListDisplay .input_button_title-list {
  display: block;
  max-height: 250px;
  overflow-y: scroll;
  z-index: 1;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.isListDisplay .input_button_title-list::-webkit-scrollbar {
  width: 0;
}
.isListDisplay {
  border-radius: 38px 38px 0 0 !important;
}
.isListDisplay .input_birthday-form_container_field-arrow {
  transform: rotate(180deg);
}
.isListDisplay .input_birthday-form_container:hover {
  background: none;
}
.inputReject {
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), inset 0px 4px 4px rgb(0 0 0 / 25%),
    0 0 0 1pt #ee5353 !important;
}
.input_birthday-form_container_item:hover,
.input_birthday-form_container_item:focus {
  background-color: #f6c866;
  color: white;
}
@media (max-width: 550px) {
  .birthday-form-container {
    margin-top: 40px;
  }
  .isListDisplay {
    border-radius: 19px 19px 0 0 !important;
  }
  .input_button_title-list {
    border-radius: 0 0 19px 19px;
  }
  .input_birthday-form_container_item {
    padding: 5px;
  }
  .isListDisplay .input_button_title-list {
    max-height: 150px;
  }
}
</style>
