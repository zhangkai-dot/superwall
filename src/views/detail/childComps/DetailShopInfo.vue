<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" v-if="shop.logo" />
      <span class="shop-namex">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.cSells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style  scoped>
</style>