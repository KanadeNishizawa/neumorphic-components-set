<template>
  <button
    id="toggle-switch"
    type="button"
    :class="toggleClasses"
    @click="isActive = !isActive"
  >
    <span :class="sliderClasses" />
  </button>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    initState: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { isActive: true };
  },

  mounted: function () {
    this.isActive = this.initState;
  },

  computed: {
    toggleClasses() {
      return {
        'toggle-switch': true,
        [`toggle-switch--active`]: this.isActive
      };
    },
    sliderClasses() {
      return {
        'toggle-switch__slider': true,
        [`toggle-switch__slider--active`]: this.isActive
      };
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/main.scss';

.toggle-switch {
  width: 4.8rem;
  height: 2.8rem;
  position: relative;
  display: flex;
  padding: 0.1rem;
  border-radius: $radius-button;
  background: $unselected;
  box-shadow: $shadow-convex, $shadow-unselected-concave;
  font-weight: medium;
  border: solid 0.1rem $base;
  align-items: center;
  @include button-cursor;
  &--active {
    background: $primary-liner;
    box-shadow: $shadow-primary-concave, $shadow-convex;
  }
  &__slider {
    position: absolute;
    display: block;
    left: 0.2rem;
    width: 2.2rem;
    height: 2.2rem;
    background: $base;
    border-radius: $circle;
    box-shadow: $shadow-drop;
    transition: $transition-all;
    &--active {
      transform: translate(2rem, 0);
    }
  }
}
</style>
