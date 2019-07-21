<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./foot";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
</style>
