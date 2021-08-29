<template>
  <component :is="loaderType"></component>
</template>

<script>
import RoundCicle from "./LoaderTypes/RoundCicle.vue";
import ProgressBar from "./LoaderTypes/ProgressBar.vue";
export default {
  name: "Loader",
  components: { RoundCicle, ProgressBar },
  props: {
    loaderType: {
      type: String,
      default: () => "RoundCicle",
    },
  },
};
</script>
