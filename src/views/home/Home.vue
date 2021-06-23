<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      results: null,
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.results = res;
    });
  },
};
</script>
<style scoped>
.nav-home {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
</style>
