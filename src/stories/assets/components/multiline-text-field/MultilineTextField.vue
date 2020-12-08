<template>
  <div class="multiline-text-field">
    <label for="text-area" :class="label">Label</label>
    <textarea
      id="text-area"
      class="multiline-text-field__text-area"
      placeholder="e.g."
    />
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    labelstate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    label() {
      return {
        'multiline-text-field__label': true,
        [`multiline-text-field__label--${this.labelstate}`]: true
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

.multiline-text-field {
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
  &__text-area {
    color: $text-main;
    width: 100%;
    height: 9.2rem;
    box-sizing: border-box;
    padding: $spacing-2 $spacing-4;
    background: $base;
    box-shadow: $shadow-concave;
    font-size: 1.4rem;
    line-height: $multi-line;
    border-radius: $radius-2;
    @include fixed;
  }
}
::placeholder {
  color: $unselected;
}
</style>
