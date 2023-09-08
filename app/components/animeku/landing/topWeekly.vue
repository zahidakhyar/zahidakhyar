<template>
  <div class="card h-fit">
    <div class="card-body">
      <h2 class="card-title">Top Weekly</h2>

      <TransitionGroup
        name="fade"
        tag="div"
        class="grid gap-4 m-auto"
        v-if="animes.length > 0"
      >
        <div
          v-for="(anime, index) in animes"
          :key="index"
          class="card card-side card-compact hover:bg-base-300 rounded-none"
        >
          <figure>
            <nuxt-img :src="anime.image" width="50px" :alt="anime.title" />
          </figure>

          <div class="card-body grid grid-flow-col self-center font-bold">
            <h2>{{ anime.title }}</h2>

            <div :class="{ 'text-right': true, 'text-primary': index == 0}">
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Anime } from "@/types";

defineProps({
  animes: {
    type: Array as PropType<Anime[]>,
    required: true,
  },
});
</script>
