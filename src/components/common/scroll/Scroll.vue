<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BTscroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    //1.创建BTscroll对象
    this.scroll = new BTscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>