<template>
  <div>
    <h1>Verbindung suchen</h1>
    <search-connection-form @search="(e) => searchConnections(e.from.value, e.to.value, e.dateTime.value)"/>
    <table class="table" v-if="connectionsResponse">
      <thead>
      <tr>
        <th scope="col">{{ connectionsResponse.from.name }}</th>
        <th scope="col">{{ connectionsResponse.to.name }}</th>
        <th scope="col">Linie</th>
        <th scope="col"></th>

      </tr>
      </thead>
      <tbody>
      <template v-for="(connection, index) in connectionsResponse.connections">
        <tr>
          <td>Abfahrt {{connection.from.departure}} auf Gleis {{connection.from.platform}}</td>
          <td>Ankunft {{connection.to.arrival}} auf Gleis {{connection.to.platform}}</td>
          <td>{{connection.products}}</td>
          <td>
            <button type="button" class="btn btn-primary" @click="toggleDetails(index)">
              mehr infos
            </button>
            <!-- connection.sections            -->
          </td>
        </tr>
        <tr :ref="(el) => { connectionDetail.push(el)}" class="d-none">
          <td colspan="4">
            <div>
              <p>TODO: display connection details here</p>
            </div>
          </td>
        </tr>
      </template>
      </tbody>xx
    </table>
  </div>
</template>
<script setup lang="ts">
import { ConnectionsResponse } from '~/config/types';
import { useConnections } from '~/composables/useConnections';

const connectionsResponse = ref<ConnectionsResponse | undefined>(undefined);
const searchConnections = async (from: string, to: string, dateTimeString: string) => {
  connectionsResponse.value = await useConnections(from, to, dateTimeString);
}

const connectionDetail = ref<[]>([]);
const toggleDetails = (index: number) => {
  connectionDetail.value.at(index).classList.remove('d-none');
}
</script>
