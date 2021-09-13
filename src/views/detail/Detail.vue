<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
      <good-list :goods="recommends" />
    </scroll>
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
import { debounce } from "common/utils.js";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodList from "components/content/goods/GoodList.vue";
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
  },
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
    };
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
  },
  methods: {
    imgLoad() {
      debounce(this.$refs.scroll.refresh, 200)();
    },
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
  height: calc(100% - 44px);
}
</style>

