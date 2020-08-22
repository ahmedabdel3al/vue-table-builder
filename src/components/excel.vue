<template>
  <a href="#" @click.prevent="exportExcel" class="vtb__column__field vtb__column__field--action">
    <i class="fas fa-file-excel"></i>
  </a>
</template>

<script>
import { EventBus } from "../event-bus";
export default {
  props: {
    url: {
      required: true,
    },
    ids: {
      required: false,
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    EventBus.$on("server-params", ({ serverParams }) => {
      this.export(this.url, serverParams);
    });
  },
  methods: {
    async exportExcel() {
      let result = await this.$swal.fire({
        title: "Are You want Export Only Select or All Matched",
        icon: "question",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Only Selected",
        cancelButtonText: "All Matched",
      });

      if (result.dismiss == "close") {
        return;
      }

      if (result.value) {
        this.export(this.url, { ids: this.ids });
      } else {
        EventBus.$emit("good-table-get-server-params");
      }
    },
    export(url, params, fileName = "excel") {
      return new Promise((resolve, reject) => {
        axios
          .get(url, {
            params,
            responseType: "blob", // important
          })
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>

<style>
</style>