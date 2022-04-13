<template>
  <div id="app">
    <v-header :sellerList="sellerList"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import request from '@/api/request'

const sellerList = () => {
  return request({
    url: '/api/seller',
    method: 'get'
  })
}
export default {
  name: 'App',
  data () {
    return {
      sellerList: {}
    }
  },
  components: {
    'v-header': Header
  },
  created () {
    sellerList().then(res => {
      // console.log(typeof res)
      // // res = res.json()
      // res = JSON.stringify(res)
      // // console.log(res.errno)
      // console.log(typeof res)
      // console.log(res.errno)
      if (res.errno === 0) {
        this.sellerList = res.data
        // console.log(sellerList)
      }
    })
  }
}
</script>

<style scoped>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid  rgba(7,17,26,.2);
    position: relative;
    }
    .tab::after{
      position: absolute;
      content: '';
    }
    .tab-item{
      flex: 1;
      text-align: center
      }
    .tab-item > a{
        display:block;
        font-size: 14px;
        color:rgb(77,85,93)
      }
    .tab-item .active{
        color: #ff6700
      }
</style>