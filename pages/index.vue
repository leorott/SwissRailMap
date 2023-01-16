<template>
  <div>
    <h1>Verbindung suchen</h1>
    <search-connection-form @search="(e) => getConnections(e.from, e.to)"/>
    <ul v-if="connectionsResponse">
      <li v-for="connection in connectionsResponse.connections">
        {{ connection }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const connectionsResponse = ref(null);
const getConnections = async (from: string, to: string) => {
  const res = await fetch(
      `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`,
      {
        method: 'GET',
      }
  );
  connectionsResponse.value = await res.json()
}

</script>
