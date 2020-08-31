<template>
  <a :href="url" class="vtb__column__field vtb__column__field--action">
    <tool-tip text="Edit">
      <i class="far fa-edit"></i>
    </tool-tip>
  </a>
</template>

<script>
import toolTip from "./sub/ToolTip";
export default {
  components: { toolTip },
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