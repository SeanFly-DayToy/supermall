<template>
  <div id="detail">
    <detail-nav-bar ref="navbar" class="detail-nav" @titleClick="titleClick" />
    <scroll ref="scroll" class="content" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detai-goods-info :detail-info="detailInfo" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommed" :goods="recommeds">
      </goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import { getDetail, Goods, Shop, GoodsParams, getRecommentd } from 'network/detail'

import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetaiGoodsInfo from './childComps/DetaiGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'

import { backTopMixin } from "common/mixin"

import { mapActions } from 'vuex'

export default {
  components: { 
    DetailNavBar, 
    DetailNavBar, 
    getDetail, 
    DetailSwiper, 
    DetailBaseInfo, 
    DetailShopInfo, 
    Scroll, 
    DetaiGoodsInfo, 
    DetailParamInfo, 
    DetailCommentInfo, 
    GoodsList,
    DetailBottomBar,
    BackTop
  }, 
  mixins: [backTopMixin],
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommeds: [],
      themeTopYs: [],
      currentIndex: 0
    }
  },
  created() {
    //1.???????????????iid
    this.iid = this.$route.params.iid

    //2.??????iid??????????????????
    getDetail(this.iid).then(res =>{
      //1.?????????????????????????????????
      const data = res.result
      this.topImages = data.itemInfo.topImages

      //2.??????????????????
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //3.????????????????????????
      this.shop = new Shop(data.shopInfo)

      //4.????????????????????????
      this.detailInfo = data.detailInfo

      //5.??????????????????
      this.paramInfo =new GoodsParams(data.itemParams.info, data.itemParams.rule)

      //6.??????????????????
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      } 

    //3.??????????????????
      getRecommentd().then(res =>{
        this.recommeds = res.data.list
      })
    })

  },
  updated() {
    this.themeTopYs = []

    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.params.$el.offsetTop - this.$refs.navbar.$el.offsetHeight)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop - this.$refs.navbar.$el.offsetHeight)
    this.themeTopYs.push(this.$refs.recommed.$el.offsetTop - this.$refs.navbar.$el.offsetHeight)
    this.themeTopYs.push(Number.MAX_VALUE)
  },
  methods: {
    ...mapActions(['addCart']),
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      console.log(this.themeTopYs);
    },
    contentScroll(position){
      //1.??????Y???
      const positionY = -position.y

      //2.positionY???????????????????????????
      let length = this.themeTopYs.length
      
      for(let i = 0; i < length-1; i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] 
        && positionY < this.themeTopYs[i+1])){
          // console.log(i);
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }

      //3.????????????????????????
      this.listenShowBackTop(position)
    },

    addToCart() {
      // 1.????????????????????????????????????
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 2.??????????????????????????????
      this.addCart(product).then(res => {
        this.$toast.show(res, 2000)
      })

      //3.????????????????????????

  }
  }
}
</script>

<style lang="scss" scoped>

#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>