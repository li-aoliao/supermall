<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  #tab-bar{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2)
  }
</style>