<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
        <tr is="TableRow" v-for="item in humans" :key="item.name" v-bind="item"/>
      </tbody>
    </table>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TableRow from "./components/TableRow.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { TableRow },
  data() {
    return {
      sortBy: "name",
      order: "asc"
    };
  },
  computed: {
    ...mapGetters(["getHumans"]),
    humans() {
      return this.getHumans();
    }
  },
  created() {
    this.fetchHumans();
  },
  methods: {
    ...mapActions(["fetchHumans"])
  }
};
</script>

<style>
body {
  font: 16px/1.3 sans-serif;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 6px;
}

th {
  background: #ddd;
  text-align: cemter;
}

td {
  text-align: right;
}

tbody tr:nth-child(even) {
  background: #eee;
}

tbody td:first-child {
  text-align: left;
}

.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 15px;
}
</style>
