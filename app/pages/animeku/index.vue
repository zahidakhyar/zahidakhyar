<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4">
      <div class="grid xl:grid-cols-6 gap-4 m-auto" v-if="!loading">
        <NuxtLink
          class="card card-compact bg-base-100 shadow-xl"
          v-for="anime in animes"
          :to="'/animeku/animekompi/' + anime.link"
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
      </div>

      <template v-else>
        <div class="text-center">
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

onMounted(async () => {
  animes.value = await store.getMain();
  loading.value = false;
});
</script>
