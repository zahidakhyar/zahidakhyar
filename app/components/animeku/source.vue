<template>
  <div class="form-control">
    <select
      class="select select-bordered w-full max-w-xs"
      v-model="currentSource"
      @change="router.push(`/animeku/${currentSource}`)"
    >
      <option value="" disabled selected>Pilih Sumber</option>

      <option
        v-for="(source, index) in sources"
        :key="index"
        :value="source.name.toLowerCase()"
        :selected="source.name.toLowerCase() === currentSource"
      >
        {{ source.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const store = useSourceStore();

const currentSource = ref("");
const sources = computed(() => store.sources);

const router = useRouter();

onMounted(() => {
  currentSource.value = router.currentRoute.value.path.split("/")[2] || "";
});
</script>
