<template>
  <div>
    <input type="checkbox" @click="changeToggleStatus" :checked="value" name id />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    changeToggleStatus() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgb(0, 0, 0.2);
  transition: -0.5s;
}
input:checked[type="checkbox"] {
  background: #03a9f4;
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgb(0, 0, 0.2);
  transition: 0.5s;
}
input:checked[type="checkbox"]::before {
  left: 20px;
}
</style>