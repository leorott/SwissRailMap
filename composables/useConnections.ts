import { getDateAndTime } from '~/utils/date-time';
import { ConnectionsResponse } from '~/config/types';

export const useConnections = async (
    from?: string,
    to?: string,
    dateTimeString?: string
): Promise<ConnectionsResponse | undefined> => {
    if (from && to && dateTimeString) {
        const { date, time } = getDateAndTime(dateTimeString);
        const res = await fetch(
            `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`,
            {
                method: 'GET',
            }
        );
        const connectionsResponse = await res.json()
        return connectionsResponse;
    }
}