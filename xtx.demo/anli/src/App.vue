<template>
    <div>
      <div class="footer_wrap">
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friend">我的好友</router-link>
      </div>

      <!-- 路由出口，匹配的组件所展示的位置 -->
      <div class="top">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap a.router-link-active{
  background-color: orange;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a.router-link-active {
  background-color: purple;
}
.footer_wrap a:hover {
  background-color: #555;
}
</style>