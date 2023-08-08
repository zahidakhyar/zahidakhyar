<template>
  <div class="hero bg-base-200 py-10" id="title">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          <span ref="title">{{ title }}</span>
          <span class="cursor" ref="cursor">|</span>
        </h1>
        <p class="py-6">{{ description }}</p>
        <button class="btn btn-primary" @click="buttonClicked">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
      buttonText: "Get Started",
    };
  },
  methods: {
    buttonClicked() {
      alert("Button clicked!");
    },
    typeTitle() {
      const title = "Hello there";
      const titleArray = title.split("");
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < titleArray.length) {
          this.title += titleArray[i];
          i++;
        } else {
          clearInterval(intervalId);
          this.$refs.cursor.style.display = "none";
        }
      }, 100);
    },
  },
  mounted() {
    this.typeTitle();
  },
};
</script>

<style>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
