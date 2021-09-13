<template>
  <div v-if="Object.keys(commentInfo).length != 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" srcset="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">
          {{ commentInfo.created | showDate }}
        </span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" alt="" v-for="(item, index) in commentInfo.images" />
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { formatDate } from "common/utils.js";
export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    commentInfo: {
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
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  //计算属性 类似于 data 概念
  computed: {},
  //监控 data 中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style  scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>