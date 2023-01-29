import { Client } from '@googlemaps/google-maps-services-js';
import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const runtimeConfig = useRuntimeConfig();

    const lat = Number(query?.lat);
    const lng = Number(query?.lng);
    const radius = Number(query?.radius);

    if (lat && lng && radius){
        const client = new Client({
            config: {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        });
        const { data } = await client.placesNearby({
            params: {
                location: [lat, lng],
                radius: radius,
                key: runtimeConfig.googleMapsApiKey
            },
        });

        return data;
    }
})