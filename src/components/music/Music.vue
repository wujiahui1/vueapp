<template>
  <div >
    <common-header message="Music"></common-header>
    <h1>music</h1>
    <common-footer></common-footer>
  </div>
</template>

<script>
    import commonHeader from '../common/Footer'
    import commonFooter from '../common/Header'
    export default {
      name: "Music",
      components: {
        commonFooter,
        commonHeader
      }
    }
</script>

<style scoped>

</style>
