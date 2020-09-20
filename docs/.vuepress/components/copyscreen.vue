<template>
<div>
    <figure>
        <slot></slot>
        <figcaption>{{ caption }}</figcaption>
    </figure>
</div>
</template>

<script>
const path = require('path')

export default {
    props: {
        caption:    {type: String, required: false}
    }
}
</script>

<style lang="stylus" scoped>
figure
    text-align: center
img
    display: block
    margin-left: auto
    margin-right: auto
    border-width: 10px
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
</style>

