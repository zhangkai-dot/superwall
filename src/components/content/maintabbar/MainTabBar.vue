<template>
  <tab-bar>
    <tabbaritem path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shouye(1).svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" activeColor="red">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/shangpinfenlei01.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shangpinfenlei01(1).svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activeColor="red">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/shop-cart-white.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shop-cart-white(1).svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/wode.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/wode(1).png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tab-bar>
</template>
<script>
import TabBar from "./TabBar/tabbar";
import tabbaritem from "./TabBar/tabbarItem";
export default {
  components: {
    TabBar,
    tabbaritem,
  },
};
</script>

<style>
</style>
