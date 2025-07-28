export interface IConfig {
    center: [number, number]
    marker: [number, number]
    title: string
    subtitle: string
    zoom: 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
    API_KEY: string,
    customStyle?: JSON
}