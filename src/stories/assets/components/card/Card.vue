<template>
  <div class="card"><ContentDummy /></div>
</template>

<script>
import Vue from 'vue';
import ContentDummy from './ContentDummy';

export default {
  components: {
    ContentDummy
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';

.card {
  border: 1px solid $base;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: $base-liner;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
}
</style>
