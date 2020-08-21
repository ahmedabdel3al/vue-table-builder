<template>
  <a href="#" @click.prevent="remove">
    <i class="fas fa-trash-alt"></i>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      required: true
    },
    ids: {
      required: false,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    async remove() {
      // confirmation popup
      let swal = await this.$swal({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33"
      });
      if (!swal.value) {
        return;
      }
      //axios section
      try {
        let data = {};
        if (Object.keys(this.ids)) {
          data = this.ids;
        }
        await axios.delete(this.url, { data });
      } catch (error) {
        console.log(error);
        //todo handle errors
      }
      //success message
      this.$swal("Deleted!", "Your file has been deleted.", "success");
    }
  }
};
</script>

<style>
</style>