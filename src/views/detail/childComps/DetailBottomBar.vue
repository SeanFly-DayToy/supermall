<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <span class="icon service"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="icon select"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  .left, .right {
    display: flex;
    flex: 1;
    div {
      flex: 1;
    }
  }
  .left {
    color: #555;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:nth-child(2) {
        font-size: 14px;
        // margin-top: 2px;
      }
    }
    .icon{
      display: block;
      width: 22px;
      height: 22px;
      margin: 6px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }
    .service{
      background-position: 0 -54px;
    }
    .shop{
      background-position: 0 -98px;
    }
  }
  .right {
    font-size: 15px;
    display: flex;
    div {
      flex: 1;
      text-align: center;
      line-height: 49px;
    }
    div:nth-child(1) {
      color: #333;
      background-color: #ffde10;
    }
    div:nth-child(2) {
      color: #fff;
      background-color: var(--color-tint);
    }
  }
}
</style>
