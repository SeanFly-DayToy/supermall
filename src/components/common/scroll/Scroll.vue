<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
import Pullup from '@better-scroll/pull-up'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
BScroll.use(Pullup)

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    //$refs能够准确的拿到wrapper
    //2.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      observeImage: true,
      pullUpLoad: this.pullUpLoad
    })

    //2.监听滚动的位置
    if(this.probeType==2 || this.probeType == 3){
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
    }

    //3.监听上拉时间
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
      //上拉加载更多
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}

</script>

<style scoped>

</style>