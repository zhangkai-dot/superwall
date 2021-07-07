<template>
  <div class="goods">
    <goods-list-items
      v-for="item in goods"
      :goodItems="item"
    ></goods-list-items>
  </div>
</template>

<script>
import GoodsListItems from "./GoodsListItems.vue";
export default {
  components: {
    GoodsListItems,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>