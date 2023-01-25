<template>
  <div>
    <h1>Verbindung suchen</h1>
    <search-connection-form @search="(e) => getConnections(e.from.value, e.to.value, e.dateTime.value)"/>
    <ul class="list-group" v-if="connectionsResponse">
      <li class="list-group-item" v-for="connection in connectionsResponse.connections">
        <p>From: {{connection.from.location.name}} at {{connection.from.departure}}, Platform {{connection.from.platform}}</p>
        <p>To: {{connection.to.location.name}} at {{connection.to.arrival}}, Platform {{connection.to.platform}}</p>
        <p>Vehicle: {{connection.products.map((p) => p)}}</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ConnectionsResponse } from '~/config/types';

const connectionsResponse = ref<ConnectionsResponse | null>(null);
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
