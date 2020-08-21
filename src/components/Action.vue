<template>
  <div>
    <span v-for="(component,i) in actions" :key="i">
      <component
        :is="component.name"
        v-bind="{ url : makeUrlValid(component, component.name) , model }"
      />
    </span>
  </div>
</template>

<script>
import edit from "./edit";
import show from "./show";
import destroy from "./delete";
export default {
  methods: {
    makeUrlValid({ url, key, value }, actionName) {
      return url.replace(key, this.model[value]);
    }
  },
  components: {
    edit,
    show,
    destroy
  },
  props: {
    actions: {
      required: true,
      type: Array
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