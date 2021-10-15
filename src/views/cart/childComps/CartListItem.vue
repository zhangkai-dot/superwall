<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button
        :is-checked="product.checked"
        @click.native="checkClick"
      ></check-button>
    </div>
    <div class="item-img">
      <img :src="product.images" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">{{ product.price }}</div>
        <div class="item-count">{{ "x" + product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckButton from "components/common/checkButton/CheckButton.vue";
export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //计算属性 类似于 data 概念
  computed: {},
  //监控 data 中的数据变化
  watch: {},
  //方法集合
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
  //生命周期 - 创建完成（可以访问当前 this 实例）
  created() {},
};
</script>
<style  scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
.info-bottom .item-count {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>