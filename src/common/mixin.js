import BackTop from 'components/content/backTop/BackTop'
import { BACK_POSITION } from "common/const"

export const backTopMixin = {
  commpents: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }, 
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  }
}