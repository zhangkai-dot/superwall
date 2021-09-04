<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item class="swiperitem" v-for="item in topImages">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiperitem {
  height: 300px;
  overflow: hidden;
}
</style>