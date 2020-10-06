<template>
<span class="card-container"><slot></slot></span>
</template>

<script>
</script>

<style lang="stylus" scoped>
.card-container
  display flex
  flex-wrap wrap
  -webkit-box-orient horizontal
  -webkit-box-direction normal
  -ms-flex-direction row
  flex-direction row

  justify-content center
  margin 0 -30px 50px 0

</style>

