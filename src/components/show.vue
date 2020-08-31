<template>
  <a :href="url" class="vtb__column__field vtb__column__field--action">
    <tool-tip text="Show">
      <i class="fa fa-eye"></i>
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
  },
};
</script>

<style>
</style>