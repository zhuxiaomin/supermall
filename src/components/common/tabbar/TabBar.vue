<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scode>
#tabBar {
  display: flex;
  background-color: #f6f6f6;
  height: 59px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
