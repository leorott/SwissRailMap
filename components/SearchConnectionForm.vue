<template>
  <div class="mb-3">
    <label for="from" class="form-label">Von</label>
    <input v-model="from" type="text" class="form-control" id="from">
  </div>
  <div class="mb-3">
    <label for="to" class="form-label">Nach</label>
    <input v-model="to" type="text" class="form-control" id="to">
  </div>
  <button @click="$emit('search', { from, to })" class="btn btn-primary">Verbindung suchen</button>
</template>
<script setup>
import { ref } from 'vue';
const from = ref(null);
const to = ref(null);
</script>