export type CarInfoType = {
    id: number,
    category: string,
    driver: string,
    phone: string | number,
    position: PositionType,
}

type PositionType = {
    latitude: number,
    longitude: number,
}