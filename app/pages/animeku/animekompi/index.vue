<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4 py-5">
      <AnimekuLandingAnime :animes="animes" :loading="loading" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Anime } from "@/types";

definePageMeta({
  layout: false,
});
const store = useAnimekompiStore();

const loading = ref(true);
const page = ref(1);
const hasNextPage = ref(true);

const animes = ref([] as Anime[]);
const animesWeekly = ref([] as Anime[]);

onMounted(async () => {
  [animes.value, hasNextPage.value] = await store.getMain();
  animesWeekly.value = await store.getTopWeekly();

  loading.value = false;
  window.onscroll = onScroll;
});

// on scroll to bottom of page, load more data
const onScroll = async () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight && hasNextPage.value) {
    loading.value = true;

    let data: Anime[] = [];

    await store
      .getMain(++page.value)
      .then(([animes, hasNext]) => {
        data = animes;
        hasNextPage.value = hasNext;
      })
      .catch(() => {
        page.value--;
      });

    animes.value = [...animes.value, ...data];

    loading.value = false;
  }
};
</script>
