<template>
  <div class="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex';
import CartList from './childComps/CartList';
import Scroll from 'components/common/scroll/Scroll';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style lang="scss" scoped>
.Cart{
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
