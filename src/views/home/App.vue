<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>
      <a href="/">回到 Index 首页</a> |
       <a href="/shop.html">SHOP页面</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: '这里面 HOME 首页'
    }
  },
  created () {

  }
}
</script>

<style lang="less">
  .home {
    text-align: center;
    color: red;
  }
</style>
