<template>
  <ProjectsDefault :project="project">
    <p class="mb-2">
      This project was my Final Project at Diploma Degree College. This
      project was built for University to make the Student know about their
      personality.
    </p>

    <p class="mb-2">
      Feature that i made in this project is:
      <ol class="list-disc ml-4">
        <li>Auth</li>
        <li>Logic for each test</li>
        <li>Different result design</li>
        <li>Admin Panel</li>
        <li>Export to PDF</li>
        <li>Dashboard for each test</li>
      </ol>
    </p>

    <p>
      Available test is: 
      <ul class="list-decimal ml-4">
        <li>Personality (DISC)</li>
        <li>Aptitude (Holland)</li>
        <li>Multiple Intelligences (Howard Gardner)</li>
        <li>Work Interest (Rothwell Miller)</li>
        <li>Work Attitude (PAPI Kostick)</li>
        <li>Academic Potential</li>
        <li>MBTI</li>
        <li>Softskill</li>
      </ul>
    </p>
  </ProjectsDefault>
</template>

<script lang="ts" setup>
const project = ref({
  title: "Psychotest App",
  image: "https://placehold.co/400x300",
  team: false,
  tech_stacks: ["Laravel 9", "MySQL", "Bootstrap 4", "PWA"],
});
</script>
