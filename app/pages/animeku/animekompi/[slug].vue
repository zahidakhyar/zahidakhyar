<template>
  <NuxtLayout name="animeku">
    {{ anime }}
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Anime } from 'types';

useHead({
  title: "Animeku",
});

definePageMeta({
  layout: false,
});

const router = useRouter();

const slug = ref(router.currentRoute.value.params.slug as string)

const anime = ref({} as Anime);
const loading = ref(true);
const store = useAnimekompiStore();

onMounted(async () => {
  anime.value = await store.getDetail(slug.value);
  loading.value = false;
});
</script>