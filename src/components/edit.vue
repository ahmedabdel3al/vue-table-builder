<template>
  <a :href="url" class="vtb__column__field vtb__column__field--action">
    <i class="far fa-edit"></i>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
    },
    model: {
      required: false,
      type: Object,
    },
  },
};
</script>

<style>
</style>