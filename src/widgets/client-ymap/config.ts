import { IConfig } from "../../shared/ui/yandex-map/ui/model"
import jsonStyles from "./custom.json"

export const config: IConfig = {
    center: [38.741311, 55.063328],
    zoom: 12,
    marker: [38.741311, 55.063328],
    title: "KorneevKovka",
    subtitle: "Мы находимся тут",
    API_KEY: "700a3c45-6418-4caa-99ce-3d7f5db44876",
    customStyle: jsonStyles as any
}