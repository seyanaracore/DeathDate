<template>
  <div
    id="dayInput"
    class="input input_birthday-form"
    :class="{ inputReject: inputsReject.day }"
    @click="inputListOpen"
  >
    <div class="input_birthday-form_container">
      <div class="input_button_title">{{ day }}</div>
      <svg
        class="input_birthday-form_container_field-arrow"
        width="13"
        height="5"
        viewBox="0 0 13 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 5L12.9952 0.5H0.00480938L6.5 5Z" fill="#202024" />
      </svg>
    </div>
    <div
      class="input_button_title-list"
      :class="{ inputReject: inputsReject.day }"
    >
      <p
        class="input_button_title input_birthday-form_container_item"
        v-if="!dayList"
      >
        Необходимо выбрать месяц и год
      </p>
      <p
        @click="setData(dayNumber)"
        v-for="dayNumber in dayList"
        :key="dayNumber"
        class="input_button_title input_birthday-form_container_item"
      >
        {{ dayNumber }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dayInput",
  props: ["inputsReject", "day", "dayList"],
  methods: {
    setData(day) {
      this.$emit("setData", "day", day);
    },
    inputListOpen() {
      this.$emit("inputListOpen", "dayInput");
    },
  },
};
</script>
