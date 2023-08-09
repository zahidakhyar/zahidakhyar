<template>
  <div class="card card-compact bg-base-100 shadow-xl">
    <figure>
      <nuxt-img
        class="rounded-t-lg"
        :src="project.image"
        width="100%"
        alt="Shoes"
      />
    </figure>

    <div class="card-body">
      <h2 class="card-title">
        {{ project.title }}

        <div
          :class="{
            'badge badge-outline': true,
            'badge-error': project.team,
          }"
        >
          {{ project.team ? "Team" : "Personal" }}
        </div>
      </h2>

      <span class="text-sm text-slate-500 mb-auto">
        <slot />
      </span>

      <div class="card-actions justify-end">
        <div
          class="badge badge-outline badge-info"
          v-for="tech in project.tech_stacks"
        >
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
