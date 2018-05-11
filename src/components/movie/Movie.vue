<template>
  <div >
    <common-header message="Movie"></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import commonFooter from '../common/Footer'
  import commonHeader from '../common/Header'
    export default {
        name: "Movie",
        components: {
          commonFooter,
          commonHeader
        }
    }
</script>

<style scoped>

</style>
