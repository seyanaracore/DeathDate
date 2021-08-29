<template>
  <div
    id="monthInput"
    class="input input_birthday-form"
    :class="{ inputReject: inputsReject.month }"
    @click="inputListOpen"
  >
    <div class="input_birthday-form_container">
      <div class="input_button_title">
        {{ month }}
      </div>
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
      :class="{ inputReject: inputsReject.month }"
    >
      <p
        @click="setData(monthName)"
        v-for="monthName in monthsArray"
        :key="monthName"
        class="input_button_title input_birthday-form_container_item"
      >
        {{ monthName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "monthInput",
  props: ["inputsReject", "month", "monthsArray"],
  methods: {
    setData(month) {
      this.$emit("setData", "month", month);
    },
    inputListOpen() {
      this.$emit("inputListOpen", "monthInput");
    },
  },
};
</script>
