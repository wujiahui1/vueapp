<template>
    <div class="header">
      <button class="home">首页</button>
      <h2 class="title">{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['message1','message2']
    }
</script>

<style scoped>
  .header{
    height:1rem;
    background-color:rgb(33, 150, 243);
    position:fixed;
    top:0;
    width:100%;
  }
  .home{
    color:#fff;
    background-color:rgb(33, 150, 243);
    line-height: 1rem;
    display:inline-block;
    position:absolute;
    margin-top:0;
    border:none;
  }
  .title{
    position: absolute;
    left:40%;
    right:50%;
    transition:transform(-50%, -50%);
    color:#fff;
  }
</style>
