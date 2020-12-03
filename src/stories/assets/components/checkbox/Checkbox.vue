<template>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label class="checkbox" for="checkbox">
      <span class="checkbox__checkmark material-icons">check</span>
    </label>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Checkbox",
  data() {
    return { checkbox: "", name: "", checked: false };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

label {
  display: inline-block;
  width: 2.6rem;
}
input {
  display: none;
}
.checkbox {
  position: relative;
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: $radius-2;
  @include button-unactive;
  @include button-transition;
  @include button-cursor;
  &__checkmark {
    color: $unselected;
    font-size: 1.8rem;
    @include center;
  }
  &:hover {
    @include button-hover;
  }
}
input:checked + .checkbox {
  @include button-active;
  span {
    color: $white;
  }
  &:hover {
    @include button-active;
  }
}
</style>
