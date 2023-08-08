<template>
  <div class="p-10 grid xl:grid-cols-2 gap-4 xl:w-1/2 m-auto" id="projects">
    <div
      v-for="content in contents"
      class="card card-compact bg-base-100 shadow-xl"
    >
      <figure class="pt-3">
        <nuxt-img class="rounded-t-lg" :src="content.image" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contents = ref([
  {
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Shirts!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Pants!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Socks!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Hats!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Gloves!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Coats!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Shorts!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
  {
    title: "Dresses!",
    description: "If you have 10 shirts and 7 pants how many outfits?",
    image: "https://placehold.co/400x300",
  },
]);
</script>
