<template>
  <div class="content-dummy">
    <p>
      This is a Card component.<br />
      Insert contents here.
    </p>
  </div>
</template>

<script>
import Vue from 'vue';

export default {};
</script>
<style lang="scss" scoped>
@import '../../scss/main.scss';

.content-dummy {
  color: $text-sub;
  line-height: $multi-line;
}
</style>
