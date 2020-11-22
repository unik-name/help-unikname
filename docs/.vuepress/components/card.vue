<template>
<a :href="this.url">
    <div class="card" 
        @mouseover="iscardhover = true"
        @mouseleave="iscardhover = false" 
        :class="{ active: iscardhover && !this.disable , disablestyle: this.disable }">
        <span class="text-content">
            <h3 class="btn" > {{ title }} </h3>
            <p class="description"><span :class="{ disablestyle: this.disable }">{{ description }}</span></p>
        </span>
    </div>
</a>
</template>

<script>
export default {
    data() {
        return {
            iscardhover: false,
        }
    },
    props: { 
        title: {type: String, required:true},  
        description: {type: String},
        url: {type: String},
        disable: {type: Boolean, required:false, default:false, },
    },
    computed: {
        style() {
            return this.disable ? '' : 'disablestyle';
        }
    }
}
</script>

<style lang="stylus" scoped>
.card
  height 9.3em
  width 17em
  min-width 17em
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-orient vertical
  -webkit-box-direction normal
  -ms-flex-direction column
  flex-direction column
  position relative
  -webkit-transition all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
  -o-transition all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
  transition all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
  border-radius 16px
  overflow hidden
  text-align center
  margin 0px 10px 0px 0px
  background-color #EFF6F6

  .active 
    -webkit-box-shadow 10px 10px 17px #e1e1e3, -3px -3px 5px #e1e1e3
    box-shadow 10px 10px 17px #e1e1e3, -3px -3px 5px #e1e1e3

  h3
    font-size 1.1rem
    font-weight 700
  
  p
    font-size 0.9rem

  .description
    color #000
    font-weight 400

.active 
    // background-color #FE7644
    // color #fff
    -webkit-box-shadow 10px 10px 17px #e1e1e3, -3px -3px 5px #e1e1e3
    box-shadow 10px 10px 17px #e1e1e3, -3px -3px 5px #e1e1e3

.text-content
    padding 10px

.btn
    //border 1px solid $accentColor
    //border-radius 5px
    padding 5px 10px
    margin 5px

.btn.active 
    border-color white

.disablestyle
    color #C0C0C0
    border-color #C0C0C0

// ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. 


</style>

