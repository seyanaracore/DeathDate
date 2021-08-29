<template>
  <div
    class="input input_birthday-form"
    id="yearInput"
    :class="{ inputReject: inputsReject.year }"
    @click="inputListOpen('yearInput')"
  >
    <div class="input_birthday-form_container">
      <div class="input_button_title">
        {{ year }}
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
      :class="{ inputReject: inputsReject.year }"
    >
      <p
        @click="setData(yearOffset - yearItem)"
        v-for="yearItem in 84"
        :key="yearItem"
        class="input_button_title input_birthday-form_container_item"
      >
        {{ yearOffset - yearItem }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dayInput",
  props: ["inputsReject", "year", "yearOffset"],
  methods: {
    setData(yearItem) {
      this.$emit("setData", "year", yearItem);
    },
    inputListOpen() {
      this.$emit("inputListOpen", "yearInput");
    },
  },
};
</script>
