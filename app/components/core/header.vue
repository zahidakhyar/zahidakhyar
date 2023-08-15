<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="#top">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><NuxtLink to="/animeku">Animeku</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">Zahid Akhyar</a>
    </div>

    <div class="navbar-end">
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
