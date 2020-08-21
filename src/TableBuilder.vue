<template>
  <div id="app">
    <vue-good-table
      ref="my-table"
      :columns="columns"
      :rows="rows"
      :select-options="selectOptions"
      mode="remote"
      :line-numbers="lineNumbers"
      :rtl="rtl"
      :fixed-header="fixedHeader"
      :pagination-options="paginationOptions"
      @on-page-change="onPageChange"
      @on-sort-change="onSortChange"
      @on-column-filter="onColumnFilter"
      @on-per-page-change="onPerPageChange"
      @on-selected-rows-change="selectionChanged"
      :totalRows="totalRecords"
      :isLoading.sync="isLoading"
      styleClass="table table-hover table-bordered vgt-table bordered "
    >
      <div slot="selected-row-actions" v-if="tableOptions.group.length">
        <action-group :groups="tableOptions.group" :selected-rows="selectedRows" />
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.tableAction&& props.column.html">
          <actions :actions="props.column.components" :model="props.row" />
        </span>
        <span v-else-if="props.column.html&&props.column.component">
          <dynamic-component :model="props.row" :column="props.column" />
        </span>
        <span v-else>{{props.formattedRow[props.column.field]}}</span>
      </template>
      <div slot="emptystate">No Data</div>
      <div slot="selected-row-actions"></div>
    </vue-good-table>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import actions from "./components/Action";
import ActionGroup from "./components/ActionGroup";
import DynamicComponent from "./components/DaynamicComponent";
import { EventBus } from "./event-bus";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  components: {
    actions,
    DynamicComponent,
    ActionGroup,
    VueGoodTable
  },
  props: {
    tableOptions: {
      required: true,
      type: Object
    },
    paginationOptions: {
      required: false,
      type: Object,
      default: function() {
        return this.tableOptions.paginationOptions;
      }
    },
    fixedHeader: {
      required: false,
      type: Boolean,
      default: function() {
        return this.tableOptions.fixedHeader;
      }
    },
    rtl: {
      required: false,
      type: Boolean,
      default: function() {
        return this.tableOptions.rtl;
      }
    },
    lineNumbers: {
      required: false,
      type: Boolean,
      default: function() {
        return this.tableOptions.lineNumbers;
      }
    },
    selectOptions: {
      required: false,
      type: Object,
      default: function() {
        return this.tableOptions.selectOptions;
      }
    }
  },
  data() {
    return {
      isLoading: false,
      totalRecords: 0,
      serverParams: {
        page: 1,
        per_page: this.tableOptions.paginationOptions.perPage || 20
      },
      rows: [],
      columns: [],
      selectedRows: []
    };
  },
  mounted() {
    EventBus.$on("good-table-get-server-params", () => {
      EventBus.$emit("server-params", {
        serverParams: this.serverParams
      });
    });
    this.setTableOptions();
    this.loadItems();
  },
  methods: {
    setTableOptions() {
      this.columns = this.tableOptions.columns;
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    setQueryParamter() {
      const urlParams = new URLSearchParams(window.location.search);
      let queryString = urlParams.keys();
      //looping throw keys
      for (let value of urlParams.keys()) {
        //put key to value in object
        queryString[value] = urlParams.get(value);
      }
      //set new key assigned
      for (let key of Object.keys(this.serverParams)) {
        queryString[key] = this.serverParams[key];
      }

      let query =
        "?" +
        Object.keys(queryString)
          .map(key => {
            return key + "=" + queryString[key];
          })
          .join("&");

      window.history.replaceState("", "", query);
    },
    onPageChange(params) {
      this.updateParams({ page: params.currentPage });
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({
        per_page: params.currentPerPage,
        page: 1
      });
      this.loadItems();
    },

    onSortChange(params) {
      const field = params[0].field;
      const type = params[0].type;
      this.updateParams({
        sort: field,
        type: type
      });
      this.loadItems();
    },

    onColumnFilter(params) {
      if (params.columnFilters) {
        for (let filter in params.columnFilters) {
          this.updateParams({
            page: 1,
            [`filter[${filter}]`]: params.columnFilters[filter]
          });
        }
        this.loadItems();
      }
    },
    // load items is what brings back the rows from server
    loadItems() {
      this.getFromServer(this.tableOptions.fetchUrl, this.serverParams).then(
        response => {
          this.totalRecords = this.tableOptions.paginationEnabled
            ? response.meta.total
            : response.data.length;
          this.rows = response.data;
        }
      );
    },
    selectionChanged({ selectedRows }) {
      this.selectedRows = selectedRows;
    },
    getFromServer(url, serverParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(url, {
            params: serverParams
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    setFilterFromQuery() {
      const urlParams = new URLSearchParams(window.location.search);
      let queryString = urlParams.keys();
      if (!urlParams.keys().length) {
        this.removeFilter();
      }
    },
    removeFilter() {
      this.columns = this.columns.map(item => {
        return { ...item, filterValue: "" };
      });
    }
  }
};
</script>

<style>
.m-b-20 {
  margin-bottom: 30px;
}
</style>