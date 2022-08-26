<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button :is-check="isSelectAll" @click.native="checkClick" class="check-buttom"/>
      <div class="check-text">全选</div>
    </div>
    <div class="center">合计：{{ totalPrice }}</div>
    <div class="right" @click="calcClick">结算：({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      //数字也可以取反
      //如果有checked为0，则返回false
      // filter在全数组遍历，返回数组
      // if (this.cartList.length)
      // return !(this.cartList.filter(item => !item.checked).length)
      // else return false
      //  用find效率更高
      // find找到一个就返回那个对象
      if (this.cartList.length === 0) return false
      return !(this.cartList.find(item => !item.checked))
    }

  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {  //全都选中情况下
        this.cartList.forEach(item => item.checked = false)
      } else {  //部分或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }

      //  代码简化  但是这里不行
      //   this.cartList.forEach(item => item.checked = !this.isSelectAll)
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择购买商品')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  height: 40px;
  bottom: 40px;
  width: 100%;
  background-color: #eee;
  font-size: 14px;
}

.left {
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 90px;
}

.check-text {
  margin-left: 2px;
  margin-bottom: 8px;
}
.check-buttom{
  display: flex;
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  /* line-height: 20px; */
}

.center {
  line-height: 32px;
  flex: 1;
}

.right {
  width: 90px;
  line-height: 32px;
  text-align: center;
  color: #fff;
  background-color: red;
}
</style>