<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4 py-5">
      <TransitionGroup
        name="fade"
        tag="a"
        class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 m-auto"
        v-if="animes.length > 0"
      >
        <NuxtLink
          class="card card-compact card-bordered border-slate-500 hover:border-primary focus-visible:outline-offset-0 focus-visible:border-0 bg-base-100 shadow-xl hover:shadow-primary focus:shadow-primary"
          v-for="anime in animes"
          :to="`/animeku/animekompi/${anime.url}`"
          :key="anime.url"
        >
          <figure class="indicator w-auto">
            <Icon
              v-if="anime.is_hot"
              name="solar:fire-bold-duotone"
              class="indicator-item indicator-start badge badge-error left-8 top-5"
            />

            <span
              class="indicator-item badge badge-warning text-sm right-8 top-5 font-semibold"
              v-if="anime.translation"
            >
              {{ anime.translation }}
            </span>

            <nuxt-img :src="anime.image" width="100%" :alt="anime.title" />
          </figure>

          <div class="card-body">
            <h5>
              {{ anime.title }}
            </h5>
          </div>
          <div class="card-actions px-4 pb-2 grid grid-flow-col-dense">
            <span class="text-sm text-slate-500">
              {{ anime.episode }}
            </span>

            <span
              :class="{
                'text-sm text-slate-500 text-right': true,
                'text-info': anime.type === 'TV',
                'text-warning': anime.type === 'Live Action' || anime.type === 'Movie',
                'text-error': anime.type === 'ONA' || anime.type === 'OVA',
                'text-accent': anime.type === 'Special',
              }"
              v-if="anime.type"
            >
              {{ anime.type }}
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

definePageMeta({
  layout: false,
});

const animes = ref([] as Anime[]);
const loading = ref(true);
const store = useAnimekompiStore();
const page = ref(1);
const hasNextPage = ref(true);

onMounted(async () => {
  [animes.value, hasNextPage.value] = await store.getMain();
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

    [data, hasNextPage.value] = await store.getMain(++page.value);

    animes.value = [...animes.value, ...data];

    loading.value = false;
  }
};
</script>
