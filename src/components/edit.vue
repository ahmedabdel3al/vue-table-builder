<template>
  <a :href="url">
    <i class="far fa-edit"></i>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      required: true
    },
    model: {
      required: false,
      type: Object
    }
  }
};
</script>

<style>
</style>