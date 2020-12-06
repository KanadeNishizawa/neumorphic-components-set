<template>
  <div id="icon-button" class="container">
    <span class="container__icon material-icons">
      {{ icon }}</span
    >
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    icon: {
      type: String,
      default: 'schedule',
      validator: function (value) {
        return (
          [
            'person',
            'schedule',
            'room',
            'category',
            'search',
            'get_app',
            'insert_drive_file',
            'style'
          ].indexOf(value) !== -1
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';

.container {
  width: 4rem;
  height: 4rem;
  position: relative;
  border-radius: $circle;
  vertical-align: middle;
  box-shadow: $liner-shadow-concave;
  background: $primary-liner-light;
  @include fixed;
  &__icon {
    text-shadow: $shadow-icon;
    font-size: 2.6rem;
    @include text-liner;
    @include fixed;
    @include center;
  }
}
</style>
