<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
    <div class="navbar-start">
      <AnimekuSource />
    </div>

    <div class="navbar-center">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/animeku">
        Animeku
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <CoreTheme />
    </div>
  </div>
</template>
