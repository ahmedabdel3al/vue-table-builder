<template>
  <div class="vtb__column__field vtb__column__field--actions">
    <span v-for="(component,i) in groups" :key="i">
      <component :is="component.name" v-bind="{...component}" :ids="calcualteIds(component)" />
    </span>
  </div>
</template>

<script>
import edit from "./edit";
import show from "./show";
import destroy from "./delete";
import excel from "./excel";
import { EventBus } from "../event-bus";
export default {
  props: {
    selectedRows: {
      required: false,
      type: Array,
      default: () => {
        return [];
      },
    },
    groups: {
      required: true,
      type: Array,
    },
  },
  methods: {
    calcualteIds(component) {
      if (!this.selectedRows.length) return { [component.value]: [] };

      let selected = _.map(this.selectedRows, component.value);

      return { [component.value]: selected };
    },
  },
  components: {
    edit,
    show,
    destroy,
    excel,
  },
};
</script>

<style>
</style>