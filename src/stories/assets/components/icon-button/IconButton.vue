<template>
  <button
    id="icon-button"
    type="button"
    :class="classes"
    @click="btnActive = !btnActive"
  >
    {{ icon }}
  </button>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    initState: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'edit',
      validator: function (value) {
        return (
          [
            'edit',
            'expand_more',
            'menu',
            'arrow_back',
            'more_vert',
            'delete'
          ].indexOf(value) !== -1
        );
      }
    },
    size: {
      type: String,
      default: 'large',
      validator: function (value) {
        return (
          ['small', 'mediun', 'large'].indexOf(value) !== -1
        );
      }
    }
  },

  data() {
    return { btnActive: false };
  },

  mounted: function () {
    this.btnActive = this.initState;
  },

  computed: {
    classes() {
      return {
        'icon-button': true,
        'material-icons': true,
        [`icon-button--${this.size}`]: true,
        [`icon-button--active`]: this.btnActive
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';

.icon-button {
  background: $base;
  color: $button-gray;
  position: relative;
  border-radius: $circle;
  vertical-align: middle;
  transition: $transition-box-shadow;
  @include fixed;
  @include button-cursor;
  @include button-inactive;
  &:hover {
    @include button-hover;
  }
  &--small {
    height: 2.6rem;
    width: 2.6rem;
    font-size: 1.6rem;
  }
  &--medium {
    height: 3.3rem;
    width: 3.3rem;
    font-size: 1.8rem;
  }
  &--large {
    height: 4rem;
    width: 4rem;
    font-size: 2.4rem;
  }
  &--active {
    color: $white;
    @include button-active;
    &:hover {
      @include button-active;
    }
  }
}
</style>
