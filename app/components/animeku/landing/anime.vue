<template>
  <TransitionGroup
    name="fade"
    tag="a"
    class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 m-auto"
    v-if="animes.length > 0"
  >
    <NuxtLink
      class="card card-compact card-bordered border-slate-500 hover:border-primary focus-visible:outline-offset-0 focus-visible:border-0 bg-base-100 shadow-xl hover:shadow-primary focus:shadow-primary"
      v-for="anime in animes"
      :to="`/animeku/${anime.source}/${anime.url}`"
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
            'text-warning':
              anime.type === 'Live Action' || anime.type === 'Movie',
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
</template>

<script lang="ts" setup>
import { Anime } from "@/types";

defineProps({
  animes: {
    type: Array as PropType<Anime[]>,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>