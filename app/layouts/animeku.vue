<template>
  <div class="flex flex-col h-screen justify-between">
    <LazyAnimekuHeader />

    <main class="mb-auto">
      <slot />
    </main>

    <LazyAnimekuFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Animeku",
});
</script>
