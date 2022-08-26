<template>
  <div>
    <CategoryNavBar />
    <div class="category-container">
      <MainCategory @change="onChange" :categoryList="categoryList" />
      <SubCategory :subCategoryList="subCategoryList" :key="subKey" />
    </div>
  </div>
</template>

<script>
import { getMainCategory, getSubCategory } from 'network/category.js'

import CategoryNavBar from './childComps/CategoryNavBar'
import MainCategory from './childComps/MainCategory'
import SubCategory from './childComps/SubCategory'

export default {
  name: 'Category',
  components: {
    MainCategory,
    CategoryNavBar,
    SubCategory
  },
  data() {
    return {
      categoryList: [],
      subCategoryList: [],
      subKey: 0
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      let res = await getMainCategory()
      this.categoryList = res.data.category.list
    },
    async getSubData(key) {
      const res = await getSubCategory(key)
      this.subCategoryList = res.data.list
    },
    onChange(key) {
      this.getSubData(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
}
</style>
