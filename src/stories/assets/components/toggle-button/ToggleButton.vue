<template>
  <div>
    <div class="toggle-button">
      <input
        id="left"
        v-model="isSelected"
        type="radio"
        name="toggle"
        value="A"
      />
      <label for="left" class="toggle-button__label--left"
        >A</label
      >
      <input
        id="right"
        v-model="isSelected"
        type="radio"
        name="toggle"
        value="B"
      />
      <label for="right" class="toggle-button__label--right"
        >B
      </label>
      <span :class="sliderClasses">{{ isSelected }}</span>
    </div>

    <ul class="contents">
      <li v-if="isSelected === 'A'">
        Content A
      </li>
      <li v-else-if="isSelected === 'B'">
        Content B
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return { isSelected: 'A', radioItems: ['A', 'B'] };
  },
  computed: {
    sliderClasses() {
      return {
        'toggle-button__slider': true,
        [`toggle-button__slider--right`]:
          this.isSelected === 'B'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
.contents {
  display: none;
}

input {
  display: none;
}

.toggle-button {
  box-sizing: border-box;
  width: 12rem;
  height: 2.8rem;
  position: relative;
  display: flex;
  padding: 0.1rem;
  border-radius: $radius-button;
  background-color: $base;
  box-shadow: $shadow-concave, $shadow-convex;
  font-weight: medium;
  border: solid 0.1rem $base;
  align-items: cener;
  @include button-cursor;
  &__label,
  %label {
    display: inline-block;
    position: absolute;
    width: 6rem;
    height: 2.4rem;
    text-align: center;
    line-height: 2.4rem;
    color: $unselected;
    &--left {
      @extend %label;
      left: 0.2rem;
    }
    &--right {
      @extend %label;
      right: 0.2rem;
    }
  }
  &__slider {
    position: absolute;
    left: 0.1rem;
    text-align: center;
    line-height: 2.4rem;
    width: 6rem;
    height: 2.4rem;
    font-size: 1.2rem;
    border-radius: $radius-button;
    background: $primary-liner;
    box-shadow: $shadow-drop;
    color: $white;
    transition: $transition-transform;
    &--right {
      transform: translateX(5.6rem);
    }
  }
}
</style>
