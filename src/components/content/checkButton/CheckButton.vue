<template>
  <div class="goods-item">
    <div class="check_buttom" :class="{check: isCheck}">
        <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>


.check_buttom {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check{
  border-color: var(--color-tint);
  background-color: var(--color-tint);
  }
</style>