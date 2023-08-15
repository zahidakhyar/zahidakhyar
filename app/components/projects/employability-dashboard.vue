<template>
  <ProjectsDefault :project="project">
    <p class="mb-2">
      This project used to help the company to know the employability of the
      graduated student.
    </p>

    <p class="mb-2">
      Feature that i made in this project is:
      <ol class="list-disc ml-4">
        <li>Auth</li>
        <li>Admin Panel</li>
        <li>Export to PDF</li>
        <li>Export to Excel</li>
        <li>Telescope (Error Monitoring)</li>
        <li>Multi-roles</li>
      </ol>
    </p>

    <p>
      Dashboard List:
      <ul class="list-decimal ml-4">
        <li>Job Vacancy</li>
        <li>Tracer Study</li>
        <li>Psychological Test</li>
      </ul>
    </p>
  </ProjectsDefault>
</template>

<script lang="ts" setup>
const project = ref({
  title: "Employability Dashboard",
  image: "https://placehold.co/400x300",
  team: false,
  tech_stacks: ["Laravel 8", "MySQL", "Bootstrap 4", "PWA"],
});
</script>
