<template>
  <a
    :href="url"
    class="vtb__column__field vtb__column__field--link"
    rel="noopener"
  >{{model[column.field]}}</a>
</template>

<script>
export default {
  props: {
    model: {
      required: true,
      type: Object,
    },
    column: {
      required: true,
      type: Object,
    },
    attributes: {
      required: true,
      type: Object,
    },
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>