<template>
  <img
    :src="model[column.field]"
    :alt="alt"
    :width="attributes.width ? attributes.width : 50"
    :height="attributes.height ? attributes.height : 50"
  />
</template>

<script>
export default {
  props: {
    model: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    },
    attributes: {
      required: true,
      type: Object
    }
  },
  computed: {
    alt() {
      if (this.attributes.altKey) {
        return this.model[this.attributes.altKey];
      }
      return "alt";
    }
  }
};
</script>

<style>
</style>