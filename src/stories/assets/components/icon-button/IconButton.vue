<template>
  <button
    id="icon-button"
    type="button"
    :class="[
      classes,
      {
        active: btnActive,
      },
    ]"
    @click="btnActive = !btnActive"
  >
    {{ icon }}
  </button>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return { btnActive: false };
  },

  props: {
    icon: {
      type: String,
      default: "edit",
      validator: function (value) {
        return (
          [
            "edit",
            "expand_more",
            "menu",
            "arrow_back",
            "more_vert",
            "delete",
          ].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "mediun", "large"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      default: "nomal",
      validator: function (value) {
        return ["nomal", "danger"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        "icon-button": true,
        "material-icons": true,
        [`icon-button--${this.size}`]: true,
        [`icon-button--${this.color}`]: true,
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

<style lang="scss" scoped>
@import "../../scss/main.scss";

.icon-button {
  position: relative;
  border-radius: 2em;
  vertical-align: middle;
  @include fixed;
  @include button-cursor;
  @include button-transition;
  @include button-unactive;
  &:hover {
    @include button-hover;
  }
  &--small {
    height: 2.6rem;
    width: 2.6rem;
    font-size: 1.6rem;
  }
  &--medium {
    height: 3.3rem;
    width: 3.3rem;
    font-size: 1.8rem;
  }
  &--large {
    height: 4rem;
    width: 4rem;
    font-size: 2.4rem;
  }
  &--nomal {
    color: $button-gray;
  }
  &--danger {
    color: $danger;
  }
}
.active.icon-button {
  color: $white;
  @include button-cursor;
  @include button-transition;
  @include button-active;
  &:hover {
    @include button-active;
  }
  &--danger {
    @include button-active-danger;
    &:hover {
      @include button-active-danger;
    }
  }
}
</style>
