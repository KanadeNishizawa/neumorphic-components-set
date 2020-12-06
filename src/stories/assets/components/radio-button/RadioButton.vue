<template>
  <div class="radio-button-group">
    <input
      id="A"
      v-model="isSelected"
      type="radio"
      name="radio"
      value="A"
    />
    <label for="A" class="radio-button"
      ><span class="radio-button__inside"
    /></label>
    <input
      id="B"
      v-model="isSelected"
      type="radio"
      name="radio"
      value="B"
    />
    <label for="B" class="radio-button"
      ><span class="radio-button__inside"
    /></label>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return { isSelected: 'A' };
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

.radio-button {
  display: block;
  width: 2rem;
  height: 2rem;
  position: relative;
  margin: 2rem;
  border-radius: $circle;
  transition: $transition-all;
  @include button-inactive;
  @include button-cursor;
  &__inside {
    background: $base;
    box-shadow: $shadow-concave;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: $circle;
    @include center;
  }
}
input:checked + .radio-button {
  @include button-active;
  &__inside {
    background: $white;
    box-shadow: none;
  }
}
</style>
