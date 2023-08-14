<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4 py-5">
      <TransitionGroup
        name="fade"
        tag="a"
        class="grid xl:grid-cols-6 gap-4 m-auto"
        v-if="animes.length > 0"
      >
        <NuxtLink
          class="card card-compact bg-base-100 shadow-xl"
          v-for="anime in animes"
          :to="`/animeku/animekompi/${anime.url}`"
        >
          <figure>
            <nuxt-img
              class="rounded-t-lg"
              :src="anime.image"
              width="100%"
              :alt="anime.title"
            />
          </figure>

          <div class="card-body">
            <h5 class="">
              {{ anime.title }}
            </h5>

            <span class="text-sm text-slate-500 mb-auto">
              {{ anime.episode }}
            </span>
          </div>
        </NuxtLink>
      </TransitionGroup>

      <template v-if="loading">
        <div class="text-center py-16">
          <span class="loading loading-dots loading-lg"></span>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Anime } from "@/types";

useHead({
  title: "Animeku",
});

definePageMeta({
  layout: false,
});

const animes = ref([] as Anime[]);
const loading = ref(true);
const store = useAnimekompiStore();
const page = ref(1);

onMounted(async () => {
  animes.value = await store.getMain();
  loading.value = false;
  window.onscroll = onScroll;
});

// on scroll to bottom of page, load more data
const onScroll = async () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    loading.value = true;

    const data = await store.getMain(++page.value);

    animes.value = [...animes.value, ...data];

    loading.value = false;
  }
};
</script>
