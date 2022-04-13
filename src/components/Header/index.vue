<template>
  <div class="header">
    <div class="content-wrapper">
      <img :src="sellerList.avatar" width="64" height="64">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{sellerList.name}}</span>
      </div>
      <div class="desc">{{sellerList.description}}/{{sellerList.deliveryTime}}分钟送达</div>
    </div>
    <div v-if="sellerList.supports" class="support">
      <span class="icon"></span>
      <span class="text">{{sellerList.supports[0].description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['sellerList']
}
</script>

<style>
</style>