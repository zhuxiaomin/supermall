<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="itemColor"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      //因为设置为字符串类型，所以无需动态绑定
    },
    activeTextColor: {
      type: String,
    },
  },
  data() {
    return {
      //isActive: false,
    };
  },
  computed: {
    isActive() {
      // 检索到了第一个动态的字符串路径，isactive就是true，如果没有检索到就返回-1，isactive为false。
      return this.$route.path.indexOf(this.path) !== -1;
    },
    itemColor() {
      return this.isActive ? { color: this.activeTextColor } : {};
    },
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
}
.tab-bar-item .icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
</style>
