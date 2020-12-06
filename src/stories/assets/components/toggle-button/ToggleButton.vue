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
      <label for="left" class="toggle-button__button"
        >A</label
      >
      <input
        id="right"
        v-model="isSelected"
        type="radio"
        name="toggle"
        value="B"
      />
      <label for="right" class="toggle-button__button"
        >B</label
      >
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

.toggle-button {
  width: 12rem;
  height: 2.6rem;
  position: relative;
  display: flex;
  padding: 0 0.1rem;
  border-radius: $radius-button;
  background-color: $base;
  box-shadow: $shadow-concave, $shadow-convex;
  font-weight: medium;
  border: solid 0.1rem $base;
  align-items: center;
  @include button-cursor;
  &__button {
    text-align: center;
    color: $button-gray;
    line-height: 2.4rem;
    width: 6rem;
    height: 2.4rem;
    font-size: 1.2rem;
    border-radius: 2rem;
    @include button-transition;
    &:hover {
      @include text-liner;
    }
  }
}
input:checked + .toggle-button__button {
  background: $primary-liner;
  box-shadow: $shadow-drop;
  color: $white;
  @include button-cursor;
  &:hover {
    @include void-text-liner;
    color: $white;
  }
}
</style>
