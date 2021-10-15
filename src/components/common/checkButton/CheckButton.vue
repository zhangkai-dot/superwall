<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" :class="{ check: isChecked }" alt="" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false,
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前 this 实例）
  created() {},
  //生命周期 - 挂载完成（可以访问 DOM 元素）
  mounted() {},
};
</script>
<style  scoped>
img {
  border-radius: 50%;
  height: 18px;
  width: 18px;
  border: 1px solid #c0c0c0;
}

.check {
  background: var(--color-tint);
  border: 1px solid var(--color-tint);
}
</style>