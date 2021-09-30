<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar" />
    <detail-bottom-bar @addcart="addTocart" />

    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <good-list :goods="recommends" ref="recommends" />
    </scroll>
    <back-top @click.native="backclick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodList from "components/content/goods/GoodList.vue";
import { itemListenerMixin, backTopMixin } from "common/mixin.js";
import { debounce } from "common/utils.js";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTop: [],
      getThemeTop: null,
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTop[index], 500);
    },
    imgLoad() {
      this.newrefresh();
      this.getThemeTop();
    },
    contentScroll(position) {
      const positionY = -position.y;

      const length = this.themeTop.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTop[i] &&
          positionY < this.themeTop[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
          console.log(this.currentIndex);
        }
        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     positionY >= this.themeTop[i] &&
        //     positionY < this.themeTop[i + 1]) ||
        //     (i === length - 1 && positionY >= this.themeTop[i]))
        // ) {
        //   this.currentIndex = i;
        //   this.$refs.navbar.currentIndex = this.currentIndex;
        // }
      }
      this.isBackTopShow = -position.y > 1000;
    },
    addTocart() {
      //1.获取购物车需要展示的信息
      const product = {};
      product.iid = this.iid;
      product.images = this.topImages[0];
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.desc = this.goods.desc;
      //2.将商品添加到购物车
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
    },
  },
  created() {
    //1.保存传入的id
    this.iid = this.$route.params.iid;
    //2.根据id请求详情数据
    getDetail(this.iid).then((res) => {
      //1.获取顶部图片轮播器数据
      const data = res.data.result;

      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.goods);
      //3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //4.获取商品详情信息
      this.detailInfo = data.detailInfo;
      //5.获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.保存评论的信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });
    this.getThemeTop = debounce(() => {
      this.themeTop = [];
      this.themeTop.push(0);
      this.themeTop.push(this.$refs.param.$el.offsetTop);
      this.themeTop.push(this.$refs.comment.$el.offsetTop);
      this.themeTop.push(this.$refs.recommends.$el.offsetTop);
      this.themeTop.push(Number.MAX_VALUE);
    }, 200);
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background: #fff;
}
.content {
  height: calc(100% - 44px - 58px);
}
</style>

