<template>
  <button
    id="button"
    type="button"
    :class="classes"
    :style="style"
    @click="btnActive = !btnActive"
  >
    {{ label }}
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
    label: {
      type: String,
      required: true,
      default: 'Button'
    },
    size: {
      type: String,
      default: 'large',
      validator: function (value) {
        return (
          ['small', 'medium', 'large'].indexOf(value) !== -1
        );
      }
    },
    layout: {
      type: String,
      default: 'flexible',
      validater: function (value) {
        return (
          ['flexible', 'fill', 'half'].indexOf(value) !== -1
        );
      }
    },
    color: {
      type: String,
      default: 'base',
      varidater: function (value) {
        return ['base', 'primary'];
      }
    },
    icon: {
      type: Boolean,
      default: false
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
        button: true,
        [`button--${this.size}`]: true,
        [`button--${this.color}`]: true,
        [`button--${this.layout}`]: true,
        ['button--withicon']: this.icon,
        ['button--active']: this.btnActive
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';

.button {
  position: relative;
  border-radius: $radius-button;
  font-weight: medium;
  vertical-align: middle;
  transition: $transition-box-shadow;
  @include button-cursor;
  @include button-inactive;
  &:hover {
    @include button-hover;
  }
  &--small {
    padding: 0 1.6rem;
    font-size: 1.2rem;
    height: 2.8rem;
    line-height: 2.8rem;
  }
  &--medium {
    padding: 0 3rem;
    height: 4rem;
    font-size: 1.4rem;
    line-height: 4rem;
  }
  &--large {
    padding: 0 3.6rem;
    height: 4.6rem;
    font-size: 1.4rem;
    line-height: 4.6rem;
  }
  &--base {
    background: $base;
    color: $text-main;
  }
  &--primary {
    background: $primary-liner-large;
    color: $white;
  }
  &--flexible {
    @include flexible;
  }
  &--fill {
    display: block;
    width: 100%;
    max-width: 400px;
  }
  &--half {
    width: 35%;
    max-width: 200px;
  }
  &--withicon {
    &::after {
      font-family: 'Material Icons';
      content: 'launch';
      font-size: 100%;
      line-height: 100%;
      @include text-liner;
      @include iconlayout;
    }
  }
  &--active {
    color: $white;
    @include button-active;
    &:hover {
      @include button-active;
    }
    &::after {
      color: white;
      @include void-text-liner;
    }
  }
}
</style>
