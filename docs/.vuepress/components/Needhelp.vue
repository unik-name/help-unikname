<template>
  <span>
    <div class="custom-block tip">
      <p class="custom-block-title">Still need help?</p>
      <p @click="showRocketWidget">
        Live-chat with us by clicking on this button on the right:
        <img class="livechat-icon" src="/livechat-icon.png" />
      </p>
      <p>OR</p>
      <p>Open a topic on our <forumurl /></p>
    </div>
  </span>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    showRocketWidget: function() {
      if (typeof window.RocketChat !== "undefined")
        window.RocketChat(function() {
          this.maximizeWidget();
        });
    },
  },
};
</script>

<style lang="stylus">
@require './../theme/styles/wrapper.styl'
</style>

<style lang="stylus" scoped>
img.livechat-icon {
  vertical-align:middle;
}
</style>
