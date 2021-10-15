<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {
    Scroll,
    CartListItem,
  },
  props: {},
  data() {
    //这里存放数据
    return {};
  },
  //计算属性 类似于 data 概念
  computed: {
    ...mapGetters(["cartList"]),
  },
  //监控 data 中的数据变化
  watch: {},
  //方法集合
  methods: {},
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style  scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>