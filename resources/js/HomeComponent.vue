<template>
  <div>
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <div class="container m-auto">
      <div class="card card-body">
        <data-table v-bind="parametersTable1" @actionTriggered="handleAction" />
      </div>
    </div>
  </div>
</template>
<script>
import DataTable from "@andresouzaabreu/vue-data-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import axios from "axios";
export default {
  props: ["fetch-url"],
  components: { DataTable },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetch_users();
  },
  watch: {},
  computed: {
    parametersTable1() {
      return {
        data: this.users,
        tableClass: "table table-sm",
        actionMode: "single",
        actions: ["view", "edit", "delete"],
        columnKeys: ["surname", "email", "phone"],
      };
    },
  },
  methods: {
    fetch_users() {
      axios
        .get(this.fetchUrl)
        .then((res) => {
          this.users = res.data.users;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    },
  },
};
</script>
