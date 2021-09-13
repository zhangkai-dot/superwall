<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="good-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        @load="imgload"
      />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    //这里存放数据
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgload() {
      //判断  所有图片都加载完毕，那么就进行一次回调
      if (++this.counter === this.imagesLength) {
        this.$emit("imgLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      //获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style  scoped>
.good-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 20px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  margin: 14px 0 10px 15px;
  color: #333;
}
.info-list img {
  width: 100%;
}
</style>