export interface ConnectionsResponse {
    connections: Connection[];
    from: Station;
    to: Station;
}

export interface Connection {
    capacity1st?: number,
    capacity2st?: number,
    duration: number,
    from: ConnectionStation,
    products: string[],
    sections: any,
    service: any,
    to: ConnectionStation,
}

export interface ConnectionStation {
    arrival: any,
    arrivalTimestamp: any,
    delay: number,
    departure: string,
    departureTimestamp: number
    location: Station,
    platform: number,
    prognosis: object,
    realtimeAvailability: any,
}

export interface Station {
    id: number,
    corrdinates: Corrdinates
    distance: any,
    name: string,
    score: any,
}

export interface Corrdinates {
    type: string,
    x: number,
    y: number,
}