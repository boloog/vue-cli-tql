<template>
  <div id="shop">
    <div id="nav">
      <router-link to="/">shop 首页</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <a href="../">单页Index首页</a> |
      <a href="../home.html"> 单页Home首页</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#shop {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
