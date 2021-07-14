<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <tabcontrol
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControl1"
      class="tabcontrol"
      v-show="isTabFixed"
    ></tabcontrol>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @SwiperImageLoad="SwiperImageLoad"
      ></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <feature></feature>
      <tabcontrol
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabControl2"
      ></tabcontrol>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backclick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import recommends from "./childComps/RecommendView.vue";
import Feature from "./childComps/FeatureView.vue";
import tabcontrol from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils.js";
export default {
  components: {
    NavBar,
    HomeSwiper,
    recommends,
    Feature,
    tabcontrol,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isBackTopShow: false,
      taboffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //监听item中的图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getscrollY();
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 网络请求相关的方法
    getHomeMultidata() {
      //函数调用以后返回的是promise
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(res.data.data.list);
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    //事件监听相关的方法
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // this.$refs.tabcontrol1.currentIndex = index;
      // this.$refs.tabcontrol2.currentIndex = index;
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //1.判断BackTo是否显示
      this.isBackTopShow = -position.y > 1000;
      //2.决定Topcontrol是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    SwiperImageLoad() {
      //2.获取组件tabControl中的offsetTop
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  /* margin-top: 44px; */
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  z-index: 9;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 11;
}
.tabcontrol {
  position: relative;
  z-index: 11;
}
</style>