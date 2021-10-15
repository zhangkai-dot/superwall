<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list />
    <cart-buttom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import CartButtomBar from "./childComps/cartButtomBar.vue";
export default {
  name: "cart",
  components: { NavBar, CartList, CartButtomBar },
  computed: {
    // 两种写法
    // 1.
    ...mapGetters(["cartLength"]),
    // 2.
    // ...mapGetters({
    //   length: "cartLength",
    // }),
  },
  activated() {}, //如果页面有 keep-alive 缓存功能，这个函数会触发
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.cart {
  height: 100vh;
}
</style>