<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)  //动态路由方式
      //query方式
      // this.$router.push({
      //   path: '/Detail',
      //   query:{
      //     name：aa
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;

    p {
      // width: 180px;
      // font-size: 18px;
      // padding: 5px;
      // color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }

    // span:nth-child(1) {
    // color: @color-tint;
    //   margin-right: 5px;
    // }

    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    
    .collect {
      position: relative;
    }

    .collect::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
    }
  }

  .star {
    width: 23px;
    vertical-align: middle;
  }
}
</style>