<template>
  <toggle-button @input="onChangeEventHandler" v-model="toggled" />
</template>

<script>
import ToggleButton from "./sub/ToggleButton";
export default {
  components: {
    ToggleButton
  },
  data() {
    return {
      toggled: Boolean(this.model[this.column.field])
    };
  },
  props: {
    model: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    }
  },
  methods: {
    onChangeEventHandler() {}
  }
};
</script>

<style>
</style>