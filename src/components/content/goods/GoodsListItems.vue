<template>
  <div class="goodItems" @click="itemClick">
    <img :src="goodItems.show.img" alt="" @load="imageLoad" />
    <div>
      <div class="goodInfo">
        <p>{{ goodItems.title }}</p>
        <span class="price">{{ goodItems.price }}</span>
        <span class="cfav">{{ goodItems.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodItems.iid);
    },
  },
};
</script>

<style>
.goodItems {
  padding-bottom: 50px;
  position: relative;
  width: 48%;
}
.goodItems img {
  width: 100%;
  border-radius: 10px;
}
.goodInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodItems p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodItems .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodItems .cfav {
  position: relative;
}
.goodItems .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>