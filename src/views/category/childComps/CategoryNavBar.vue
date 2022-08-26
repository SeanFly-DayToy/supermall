<template>
  <NavBar class="navbar">
    <template #center>分类</template>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
