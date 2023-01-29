import { useRuntimeConfig } from '#app';

export const usePlaces = async (lat?: number, lng?: number, radius?: number): Promise<any | undefined> => {
    if (lat && lng && radius){
        const config = useRuntimeConfig();
        const baseURL = config.public.baseUrl;

        const res = await fetch(
            `${baseURL}/api/get-places-nearby?lat=${lat}&lng=${lng}&radius=${radius}`,
            {
                method: 'GET',
            });

        return await res.json();
    }
};
