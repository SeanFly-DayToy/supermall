<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
 .goods-title {
   color: #333;
   font-weight: 400;
   font-size: 20px;
   padding: 10px;
   text-align: center;
 }

 .goods-list {
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
 }
</style>