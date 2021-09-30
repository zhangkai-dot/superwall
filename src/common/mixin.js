import { debounce } from "common/utils.js";
import BackTop from "components/content/backTop/BackTop.vue";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newrefresh: null
    };
  },
  mounted() {
    this.newrefresh = debounce(this.$refs.scroll.refresh, 200);
    //监听item中的图片加载完成
    this.itemImgListener = () => {
      this.newrefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopShow: false
    };
  },
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};
