<template>
  <form action=".">
    <div class="singlline-text-field">
      <label for="text-box" :class="label">Label</label>
      <input type="text" id="text-box" :class="classes" placeholder="e.g." />
    </div>
  </form>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    labelstate: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "form",
      varidater: function (value) {
        return ["form", "search", "memo"];
      },
    },
  },
  computed: {
    classes() {
      return {
        "singlline-text-field__text-box": true,
        [`singlline-text-field__text-box--${this.type}`]: true,
      };
    },
    label() {
      return {
        "singlline-text-field__label": true,
        [`singlline-text-field__label--${this.labelstate}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

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
    color: $text-main;
    width: 100%;
    box-sizing: border-box;
    padding: 0 $spacing-4;
    background: $base;
    box-shadow: $shadow-concave;
    font-size: 1.4rem;
    border-radius: $radius-2;
    @include fixed;
    &--form {
      height: 4rem;
    }
    &--search {
      height: 4rem;
    }
    &--memo {
      height: auto;
    }
  }
}
::placeholder {
  color: $unselected;
}
</style>
