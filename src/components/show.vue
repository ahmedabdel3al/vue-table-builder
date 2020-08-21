<template>
  <a :href="url">
    <i class="fa fa-eye"></i>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      required: true
    }
  }
};
</script>

<style>
</style>