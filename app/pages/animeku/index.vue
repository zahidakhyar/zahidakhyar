<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4 py-5">
      <TransitionGroup
        name="fade"
        tag="a"
        class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 m-auto"
      >
        <NuxtLink
          class="card card-compact card-bordered hover:border-primary focus-visible:outline-offset-0 focus-visible:border-0 bg-base-100 shadow-xl hover:shadow-primary focus:shadow-primary"
          v-for="(source, index) in sources"
          :to="`/animeku/${source.name.toLowerCase()}`"
          :key="index"
        >
          <figure class="p-2">
            <img :src="`/images/animeku/${source.image}`" :alt="source.name" />
          </figure>

          <div class="card-body">
            <h5>
              {{ source.name }}
            </h5>
          </div>
        </NuxtLink>
      </TransitionGroup>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const store = useSourceStore();

const sources = computed(() => store.sources);
</script>
