<template>
  <div class="singlline-text-field">
    <label for="text-box" :class="label">Label</label>
    <div :class="classes">
      <input
        class="singlline-text-field__text"
        id="text-box"
        type="text"
        placeholder="e.g."
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    labelstate: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'form',
      varidater: function (value) {
        return ['form', 'search', 'memo'];
      }
    }
  },
  computed: {
    classes() {
      return {
        'singlline-text-field__text-box': true,
        [`singlline-text-field__text-box--${this.type}`]: true
      };
    },
    label() {
      return {
        'singlline-text-field__label': true,
        [`singlline-text-field__label--${this.labelstate}`]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
form {
  width: 100%;
}

.singlline-text-field {
  @include fixed;
  &__label {
    font-size: 1.4rem;
    color: $text-main;
    line-height: $single-line;
    margin-bottom: $spacing-2;
    &--true {
      display: inline-block;
    }
    &--false {
      display: none;
    }
  }
  &__text-box {
    display: flex;
    align-items: center;
    vertical-align: middle;
    color: $text-main;
    width: 100%;
    box-sizing: border-box;
    padding: 0 $spacing-4;
    background: $base;
    box-shadow: $shadow-concave;
    font-size: 1.4rem;
    border-radius: $radius-2;
    &--form {
      height: 4rem;
    }
    &--search {
      height: 3.6rem;
      &::before {
        margin: 0 $spacing-1 0 0;
        font-family: 'Material Icons';
        content: 'search';
        color: $button-gray;
        font-size: 2.2rem;
        line-height: 100%;
        @include iconlayout;
      }
    }
  }
  &__text {
    color: $text-main;
    box-sizing: border-box;
    background: $base;
    font-size: 1.4rem;
    line-height: $single-line;
    height: 2rem;
  }
}
::placeholder {
  color: $unselected;
}
</style>
