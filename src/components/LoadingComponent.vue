<template>
  <div class="loading-wrap">
    <VueSpinnerHourglass class="loading-icon" size="60" color="#fff"/>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrap{
  position: fixed;
  left: 200px;
  right: 0;
  top: 50px;
  bottom: 0;
  background: linear-gradient(to top, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
  // border: 1px solid #f00;
  .loading-icon{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>