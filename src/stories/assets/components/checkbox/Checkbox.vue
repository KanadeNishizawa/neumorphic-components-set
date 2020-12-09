<template>
  <div>
    <input
      id="check-box1"
      v-model="isChecked"
      value="Content1"
      type="checkbox"
    />
    <label :class="boxClasses" for="check-box1">
      <span :class="checkClasses">check</span>
    </label>
    <p class="label">
      checked: <span class="bold">{{ isChecked }}</span>
    </p>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Checkbox',
  props: {
    initState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { isChecked: false };
  },
  computed: {
    boxClasses() {
      return {
        'check-box': true,
        [`check-box--checked`]: this.isChecked
      };
    },
    checkClasses() {
      return {
        'material-icons': true,
        'check-box__checkmark': true,
        [`check-box__checkmark--checked`]: this.isChecked
      };
    }
  },
  mounted: function () {
    this.isChecked = this.initState;
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
div {
  display: flex;
  align-items: center;
}
input {
  display: none;
}
.check-box {
  position: relative;
  display: inline-block;
  margin-right: $spacing-2;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: $radius-2;
  transition: $transition-box-shadow;
  @include button-inactive;
  @include button-cursor;
  &:hover {
    @include button-hover;
  }
  &--checked {
    @include button-active;
    &:hover {
      @include button-active;
    }
  }
  &__checkmark {
    color: $unselected;
    font-size: 1.8rem;
    @include center;
    &--checked {
      color: $white;
    }
  }
}
.label {
  @include text-main;
  .bold {
    font-weight: bold;
  }
}
</style>
