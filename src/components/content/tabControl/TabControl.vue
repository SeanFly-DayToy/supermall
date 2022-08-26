<template>
  <div class="tab-control">
    <div v-for = "(item, index) in titles"
    class="teb-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>  
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      style: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
      }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  /* background-color: #fff; */
}

.teb-control-item {
  flex: 1;
}

.teb-control-item span {
  padding: 3px;
}
.tab-control .active {
  color: var(--color-high-text);
}

.tab-control .active span {
  border-bottom: 3px solid var(--color-tint);
}

</style>