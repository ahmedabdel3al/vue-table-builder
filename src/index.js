import TableBuilder from './TableBuilder.vue'
import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";



const builder = {
  install(Vue, options) {
    Vue.use(VueSweetalert2);
    Vue.component('TableBuilder', TableBuilder)
  }
};

export default builder;