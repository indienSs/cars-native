export type CarInfoType = {
    auto: string,
    category: string,
    driver: string,
    phone: string | number,
    position: PositionType,
}

type PositionType = {
    latitude: number,
    longitude: number,
}