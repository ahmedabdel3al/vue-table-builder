<template>
  <a :href="url">{{model[column.field]}}</a>
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
    url() {
      if (this.attributes.key && this.attributes.value) {
        let a = this.attributes.url.replace(
          this.attributes.key,
          this.model[this.attributes.value]
        );
      }
      return this.attributes.url;
    }
  }
};
</script>

<style>
</style>