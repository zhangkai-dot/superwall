<template>
  <div class="detail">
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script >

<style scoped>
</style>