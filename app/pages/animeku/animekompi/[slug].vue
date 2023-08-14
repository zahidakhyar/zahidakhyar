<template>
  <NuxtLayout name="animeku">
    <div class="container mx-auto px-4">
      <template v-if="!loading">
        <div class="hero bg-base-200 rounded-lg">
          <div class="hero-content flex-col lg:flex-row">
            <nuxt-img
              :src="anime.image"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-5xl font-bold">{{ anime.title }}</h1>
              <p class="py-6 text-justify">
                {{ anime.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="overflow-x-auto">
              <table class="table">
                <tbody>
                  <tr v-for="downloadLink in anime.downloadLinks">
                    <td class="capitalize" width="10%">
                      {{ downloadLink.type }} {{ downloadLink.resolution }}
                    </td>

                    <td>
                      <template v-for="(link, index) in downloadLink.urls">
                        <a
                          :href="link.url"
                          target="_blank"
                          class="hover:underline"
                        >
                          {{ link.name }}
                        </a>

                        <span v-if="index !== downloadLink.urls.length - 1">
                          |
                        </span>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="text-center">
          <span class="loading loading-dots loading-lg"></span>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Anime } from "types";

useHead({
  title: "Animeku",
});

definePageMeta({
  layout: false,
});

const router = useRouter();

const slug = ref(router.currentRoute.value.params.slug as string);

const anime = ref({} as Anime);
const loading = ref(true);
const store = useAnimekompiStore();

onMounted(async () => {
  anime.value = await store.getDetail(slug.value);
  loading.value = false;
});
</script>