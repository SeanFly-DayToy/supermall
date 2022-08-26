<template>
  <div class="middle">
    <div>
      <img src="~assets/img/profile/xiaoxi.png" alt="" />
      <span>我的消息</span>
    </div>
    <div>
      <img src="~assets/img/profile/jifen.png" alt="" />
      <span>积分商城</span>
    </div>
    <div>
      <img src="~assets/img/profile/huiyuan.png" alt="" />
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleView'
}
</script>

<style lang="scss" scoped>
.middle {
  border-bottom: 20px solid var(--color-background);
  div:nth-child(-n + 2) {
    border-bottom: 1px solid #ccc;
  }
  div {
    padding: 10px 15px;
    font-size: 17px;
    img {
      width: 25px;
      vertical-align: middle;
    }
    span {
      margin-left: 10px;
    }
  }
}
</style>
