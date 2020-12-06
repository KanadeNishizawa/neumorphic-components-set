<template>
  <button
    id="button"
    type="button"
    :class="[
      classes,
      {
        active: btnActive
      }
    ]"
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
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1;
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

  computed: {
    classes() {
      return {
        button: true,
        [`button--${this.size}`]: true,
        ['button--withicon']: this.icon
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

<style lang="scss">
@import '../../scss/main.scss';

.button {
  position: relative;
  border-radius: $radius-button;
  color: $text-main;
  font-weight: medium;
  vertical-align: middle;
  @include button-cursor;
  @include button-transition;
  @include button-inactive;
  &:hover {
    @include button-hover;
  }
  &--small {
    font-size: 1.2rem;
    padding: 1rem 1.6rem;
    @include flexible;
  }
  &--large {
    font-size: 1.4rem;
    padding: 1.3rem 3.6rem;
    width: 100%;
    @include fixed;
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
}
.active.button {
  color: $white;
  @include button-cursor;
  @include button-transition;
  @include button-active;
  &:hover {
    @include button-active;
  }
  &--withicon {
    &::after {
      @include void-text-liner;
    }
  }
}
</style>
