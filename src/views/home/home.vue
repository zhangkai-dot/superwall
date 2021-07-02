<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommends"></recommends>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import recommends from "./childComps/RecommendView.vue";
import { getHomeMultidata } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    recommends,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //函数调用以后返回的是promise
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>