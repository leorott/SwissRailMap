<template>
  <Navbar />
  <div class="container">
    <slot></slot>
  </div>
</template>
<script setup>
import { useHead } from '#head';
import Navbar from "~/components/Navbar.vue";
// add bootstrap from cdn
useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'
    }
  ],
  link: [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
      rel: 'stylesheet'
    }
  ]
})
</script>