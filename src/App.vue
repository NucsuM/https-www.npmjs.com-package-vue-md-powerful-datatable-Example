<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    ABCD
<vue-md-powerful-datatable
    :headData="birdsHeadData"
    :data="birds"
    :max="10"
    :selectable="true"
    selectedRowIndexKey="name"
    v-on:rowSelectionChange="selectedRowsChanged"
    > <!-- last 3 attributes to use feature -->
</vue-md-powerful-datatable>
  </div>
</template>

<script>
import VueMdPowerfulDatatable from "vue-md-powerful-datatable";
export default {
  components: {
    VueMdPowerfulDatatable
  },
  name: "app",
  data() {
    return {
      birds: [
        {
          name: "Birdy",
          variety: "Eagle",
          size: 330,
          wingCount: 1.5
        },
        {
          name: "Rosa",
          variety: "Peacock",
          size: 630,
          wingCount: 2
        }
      ],
      birdsHeadData: [
        {
          key: "name",
          name: "Birds Name"
        },
        {
          key: "variety",
          name: "Birds variety"
        },
        {
          key: "size",
          name: "Size of Bird",
        },
        {
          key: "wingCount",
          name: "Number of wings"
        }
      ],
      msg: "Welcome to Your Vue.js App"
    };
  },
  watch: {},
  methods: {
    selectedRowsChanged(selectedRows) {
      console.log(selectedRows);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
