<template>
  <button
    id="button"
    type="button"
    :class="[
      classes,
      {
        active: btnActive,
      },
    ]"
    :style="style"
    @click="btnActive = !btnActive"
  >
    {{ label }}
  </button>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return { btnActive: false };
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "large"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        button: true,
        [`button--${this.size}`]: true,
        ["button--withicon"]: this.icon,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.button {
  position: relative;
  border-radius: 3em;
  color: $text-main;
  font-weight: medium;
  vertical-align: middle;
  @include button-cursor;
  @include button-transition;
  @include button-unactive;
  &:hover {
    @include button-hover;
  }
  &--small {
    font-size: 1.2rem;
    padding: 1rem 1.6rem;
    @include flexible;
  }
  &--large {
    font-size: 1.4rem;
    padding: 1.3rem 3.6rem;
    width: 100%;
    @include fixed;
  }
  &--withicon {
    &::after {
      font-family: "Material Icons";
      content: "launch";
      font-size: 100%;
      line-height: 100%;
      @include text-liner;
      @include iconlayout;
    }
  }
}
.active.button {
  color: $white;
  @include button-cursor;
  @include button-transition;
  @include button-active;
  &:hover {
    @include button-active;
  }
  &--withicon {
    &::after {
      background: none;
      background-clip: none;
      -webkit-text-fill-color: inherit;
    }
  }
}
</style>
