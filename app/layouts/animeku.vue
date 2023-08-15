<template>
  <LazyAnimekuHeader />

  <div class="pb-16" id="home"></div>

  <div>
    <slot />
  </div>

  <LazyAnimekuFooter />
</template>

<script lang="ts" setup>
useHead({
  title: "Animeku",
});
</script>
