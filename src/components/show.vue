<template>
  <a :href="url" class="vtb__column__field vtb__column__field--action">
    <i class="fa fa-eye"></i>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
    },
  },
};
</script>

<style>
</style>