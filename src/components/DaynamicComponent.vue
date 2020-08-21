<template>
  <component :is="column.component.name" v-bind="{model, column , attributes : column.component}" />
</template>

<script>
import Toggle from "./toggle";
import Link from "./LinkComponent";
import Photo from "./Photo";
export default {
  components: {
    Toggle,
    Link,
    Photo
  },
  props: {
    column: {
      required: true,
      type: Object
    },
    model: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>