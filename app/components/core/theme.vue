<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <Icon name="ic:outline-color-lens" size="1.5em" />
    </label>
    <div
      class="menu menu-sm dropdown-content max-h-80 overflow-y-auto w-auto bg-base-100 rounded-box shadow z-[1] mt-3 p-2"
    >
      <ul tabindex="0" class="capitalize">
        <li v-for="theme of themes" :key="theme">
          <a
            @click="colorMode.preference = theme"
            :class="{ active: colorMode.preference === theme }"
          >
            {{ theme }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

const colorMode = useColorMode();
const themes = [
  "system",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
</script>