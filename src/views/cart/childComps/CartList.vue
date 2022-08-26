<template>
  <div class="cart-list">
    <div>
      <cart-list-item v-for="(item, index) in cartList" :product="item" :key="index" />
    </div>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'
import CartBottomBar from './CartBottomBar'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem,
    CartBottomBar
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style lang="scss" scoped>

</style>
