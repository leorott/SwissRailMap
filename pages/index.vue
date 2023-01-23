<template>
  <div>
    <h1>Verbindung suchen</h1>
    <search-connection-form @search="(e) => getConnections(e.from.value, e.to.value, e.dateTime.value)"/>
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
const getConnections = async (from: string, to: string, dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  const date = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
  const time = `${dateTime.getHours()}:${dateTime.getMinutes()}`
  const res = await fetch(
      `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`,
      {
        method: 'GET',
      }
  );
  connectionsResponse.value = await res.json()
}


</script>
