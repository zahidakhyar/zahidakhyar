<template>
  <div class="container-fluid bg-base-200" id="skills">
    <div class="hero py-10">
      <div class="hero-content text-center">
        <div class="w-full px-4">
          <div class="mx-auto my-16 max-w-xl text-center">
            <h4 class="text-lg font-semibold text-red-500">Skills</h4>
            <h2 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Experience Tools
            </h2>
            <!-- <p class="text-md font-medium text-slate-500 md:text-lg">
            This is the list of my latest projects that i create either with team
            or by my self
          </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-center p-10">
      <a
        v-for="skill in skills"
        :key="skill.name"
        :href="skill.link"
        target="_blank"
        class="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
      >
        <img
          :src="
            process.env.NODE_ENV === 'production'
              ? `/zahidakhyar/${skill.image}`
              : skill.image
          "
          :alt="skill.name"
          @error="skill.image = 'https://placehold.co/125x125'"
          loading="lazy"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const skills = ref([
  {
    name: "Go",
    image: "/images/skills/go.png",
    link: "https://go.dev/",
  },
  {
    name: "PHP",
    image: "/images/skills/php.png",
    link: "https://www.php.net/",
  },
  {
    name: "Javascript",
    image: "/images/skills/js.png",
    link: "https://www.javascript.com/",
  },
  {
    name: "Laravel",
    image: "/images/skills/laravel.png",
    link: "https://laravel.com/",
  },
  {
    name: "NestJS",
    image: "/images/skills/nestjs.png",
    link: "https://nestjs.com/",
  },
  {
    name: "VueJS",
    image: "/images/skills/vuejs.png",
    link: "https://vuejs.org/",
  },
  {
    name: "NuxtJS",
    image: "/images/skills/nuxtjs.png",
    link: "https://nuxt.com/",
  },
  {
    name: "MySQL",
    image: "/images/skills/mysql.png",
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    image: "/images/skills/postgresql.png",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    image: "/images/skills/mongodb.png",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Docker",
    image: "/images/skills/docker.png",
    link: "https://www.docker.com/",
  },
  {
    name: "RabbitMQ",
    image: "/images/skills/rabbitmq.png",
    link: "https://www.rabbitmq.com/",
  },
  {
    name: "Gin",
    image: "/images/skills/gin.png",
    link: "https://gin-gonic.com/",
  },
]);
</script>
