<template>
    <span :class="this.name" :title="title()">{{ fullBrandName() }}</span>
</template>

<script>
export default {
    props: { name: {type: String, default: 'BRAND'} },
    methods: {
      fullBrandName: function () {
        switch (this.name) {
          case 'uns': return 'uns.network';
          case 'unikname': return 'Unikname';
        }
      },
      title: function () {
        switch (this.name) {
          case 'uns': return 'Universal Name System Network: The Unikname Blockchain';
          case 'unikname': return "Unikname™ is a set of user friendly cyber-solutions aiming of securing internet platforms and protecting user's privacy.";
        }
      }
    }
}
</script>

<style lang="stylus" scoped>

.uns
  color #4DCFCA
  font-weight bold

.unikname
  color #0F2046
  font-weight bold

</style>

