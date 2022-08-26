<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'


export default {
  components: { Swiper, SwiperItem },
  name: "DetailSwiper",
  props: {
    topImages:{
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>