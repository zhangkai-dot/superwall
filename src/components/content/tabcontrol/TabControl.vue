<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      class="tabcontrol-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tabcontrol-item {
  flex: 1;
  line-height: 44px;
  height: 44px;
}
.tabcontrol-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>