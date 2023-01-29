<template>
  <div>
    <p>Places near {{connection.from.location.name}}</p>
    <ul>
      <li v-for="place in placesNearbyDepartureStation.results">
        {{ place.name }}
        <!-- {{ place.vicinity }}
        {{ place.types }} -->
      </li>
    </ul>

    <p>Places near {{connection.to.location.name}}</p>
    <ul>
      <li v-for="place in placesNearbyArrivalStation.results">
        {{ place.name }}
        <!-- {{ place.vicinity }}
        {{ place.types }}-->
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
 import { Connection } from '~/config/types';
 import { PropType } from 'vue';
 import { usePlaces } from '~/composables/usePlaces';

 const props = defineProps({
   connection: {
     type: Object as PropType<Connection>,
   }
 });

 const latDeparture = props.connection?.from.location.coordinate.x;
 const lngDeparture = props.connection?.from.location.coordinate.y;
 const latArrival = props.connection?.to.location.coordinate.x;
 const lngArrival = props.connection?.to.location.coordinate.y;
 const radius = 200;

 const placesNearbyDepartureStation = await usePlaces(latDeparture, lngDeparture, radius);
 const placesNearbyArrivalStation = await usePlaces(latArrival, lngArrival, radius);
</script>