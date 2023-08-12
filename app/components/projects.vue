<template>
  <div class="container-fluid" id="projects">
    <div class="hero py-10">
      <div class="hero-content text-center">
        <div class="w-full px-4">
          <div class="mx-auto my-16 max-w-xl text-center">
            <h4 class="text-lg font-semibold text-red-500">Portofolio</h4>
            <h2 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              My Latest Projects
            </h2>
            <p class="text-md font-medium text-slate-500 md:text-lg">
              This is the list of my latest projects that i create either with
              team or by my self
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-10 grid xl:grid-cols-2 gap-4 xl:w-1/2 m-auto">
      <lazy-projects-psychotest-app />

      <lazy-projects-employability-dashboard />
    </div>
  </div>
</template>
