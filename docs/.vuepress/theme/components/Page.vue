<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageNav v-bind="{ sidebarItems }" />

    <PageEdit />

    <slot name="bottom" />

    <Footer class="pagefooter" />
    
  </main>
</template>

<script>
import PageNav from '@theme/components/PageNav.vue'
import PageEdit from '@theme/components/PageEdit.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.pagefooter
  padding 2rem 0rem 0rem 2rem
</style>
