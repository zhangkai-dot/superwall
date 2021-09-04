<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import { getDetail, Goods, Shop } from "network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    //1.保存传入的id
    this.iid = this.$route.params.iid;
    //2.根据id请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
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
    });
  },
};
</script>

<style scoped>
</style>

