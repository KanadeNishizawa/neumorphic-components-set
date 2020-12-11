<template>
  <div class="radio-button-group">
    <section>
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
      <p class="label">content A</p>
    </section>
    <section>
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
      <p class="label">content B</p>
    </section>
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
section {
  display: flex;
  margin: $spacing-4 0;
}

input {
  display: none;
}

.radio-button {
  display: block;
  width: 2rem;
  height: 2rem;
  position: relative;
  margin-right: $spacing-2;
  border-radius: $circle;
  transition: $transition-all;
  @include button-inactive;
  @include button-cursor;
  &:hover {
    @include button-hover;
  }
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
.label {
  @include text-main;
}
</style>
