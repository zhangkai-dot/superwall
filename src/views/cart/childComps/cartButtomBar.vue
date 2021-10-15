<template>
  <div class="buttom-bar">
    <div class="check-all">
      <check-button class="check-button"
      :is-checked="isSelectAll"
      @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">
      <span>合计:{{totalprice}}</span>
    </div>
    <div class="calculate">
      <span>去计算({{checkLength}})</span>
    </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/common/checkButton/CheckButton.vue";
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from "vuex";
export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {
    CheckButton,
  },
  props: {},
  data() {
    //这里存放数据
    return {};
  },
  //计算属性 类似于 data 概念
  computed: {
    ...mapGetters(["cartList"]),
    totalprice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      //1.使用filter
      // return !this.cartList.filter((item) => {
      //   return !item.checked;
      // }).length;
      //2.使用find
      // return !this.cartList.find((item) => !item.checked);
      //3.使用普通遍历
      for (let item of this.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  //监控 data 中的数据变化
  watch: {},
  //方法集合
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
      // this.cartList.forEach((item) => (item.checked = !this.isSelectAll));
    },
  },
  //生命周期 - 创建完成（可以访问当前 this 实例）
  created() {},
  //生命周期 - 挂载完成（可以访问 DOM 元素）
  mounted() {},
};
</script>
<style  scoped>
.buttom-bar {
  height: 40px;
  background: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.check-all {
  display: flex;
  align-items: center;
}
.check-button {
  width: 22px;
  height: 22px;
  margin-left: 10px;
  margin-right: 2px;
}
.calculate {
  background-color: var(--color-tint);
  height: 100%;
  width: 90px;
  text-align: center;
  color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>