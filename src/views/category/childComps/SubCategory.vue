<template>
  <div class="sub-scroll">
    <scroll :setWidth75="true" ref="subScroll">
      <ul class="item-container">
        <li v-for="item in subCategoryList" :key="item.acm">
          <img :src="item.image" alt="" />
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'SubCategory',
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.sub-scroll {
  flex: 3;
  width: 100%;
  position: relative;
}
.item-container {
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  li {
    text-align: center;
    margin-top: 30px;
    img {
      width: 50px;
    }
    p {
      margin-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
