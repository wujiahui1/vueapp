<template>
    <ul class="footer">
      <li @click="toMovie">电影</li>
      <li @click="toMusic">音乐</li>
      <li @click="toBook">书籍</li>
      <li @click="toPhoto">图片</li>
    </ul>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
          toMovie(){

          },
          toMusic(){

          },
          toBook(){

          },
          toPhoto(){

          }
        }
    }
</script>

<style scoped>
  .footer{
    height:1rem;
    background-color:rgb(33, 150, 243);
    position:fixed;
    bottom:0;
    width:100%;
    display: flex;
    line-height:1rem;
  }

  .footer li {
    font-size: 24px;
    flex-grow: 1;
    text-align: center;
    color:#fff;
    cursor: pointer;
  }
</style>
