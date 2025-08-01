"use client";

//@ts-nocheck

declare global {
    interface Window {
        ymaps3: any
    }
}

import { IConfig } from "@/shared/ui/yandex-map/ui/model";
import { FC, useEffect } from "react";

type Props = {
    config: IConfig
}

export const YandexMap: FC<Props> = ({ config }) => {
    useEffect(() => {
        const initMap = async () => {
            try {
                await window.ymaps3.ready;

                const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer } = window.ymaps3;

                // Регистрируем CDN для загрузки UI компонентов
                window.ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', [
                    '@yandex/ymaps3-default-ui-theme@0.0.19',
                    '@yandex/ymaps3-markers@0.0.1'
                ]);

                // Загружаем необходимые UI компоненты
                const { YMapZoomControl } = await window.ymaps3.import('@yandex/ymaps3-default-ui-theme');
                const { YMapDefaultMarker } = await window.ymaps3.import('@yandex/ymaps3-markers@0.0.1');

                const container = document.getElementById("map-container");
                if (!container) return;

                container.innerHTML = "";

                // Создаем карту с центром в нужных координатах
                const map = new YMap(container, {
                    location: {
                        center: config.center,
                        zoom: config.zoom
                    }
                });

                // Добавляем слой с кастомизацией
                map.addChild(new YMapDefaultSchemeLayer({
                    theme: "dark",
                    customization: config.customStyle ?? ""
                }));

                // этот слой нужен для маркеров
                map.addChild(new YMapDefaultFeaturesLayer({}));

                // Добавляем маркер
                map.addChild(new YMapDefaultMarker({
                    coordinates: config.marker,
                    title: config.title,
                    subtitle: config.subtitle,
                }));

                // Добавляем контролы
                const controls = new YMapControls({ position: 'right' });
                controls.addChild(new YMapZoomControl({ easing: "ease-in" }));
                map.addChild(controls);

            } catch (error) {
                console.error("Map error:", error);
            }
        };

        if (window.ymaps3) {
            initMap();
            return;
        }

        if (!document.getElementById("yandex-maps-script")) {
            const script = document.createElement("script");
            script.id = "yandex-maps-script";
            script.src = `https://api-maps.yandex.ru/v3/?apikey=${config.API_KEY}&lang=ru_RU`;
            script.async = true;
            script.onload = initMap;
            script.onerror = (e) => console.error("Script error:", e);
            document.body.appendChild(script);
        }

        return () => {
            const script = document.getElementById("yandex-maps-script");
            if (script) document.body.removeChild(script);

            const container = document.getElementById("map-container");
            if (container) container.innerHTML = "";
        };
    }, []);

    return (
        <div
            id="map-container"
            className="rounded-md overflow-hidden"
            style={{
                height: "100%",
                width: "100%",
                position: "relative"
            }}
        >
            {typeof window !== 'undefined' && !window.ymaps3 && <div>Загрузка карты...</div>}
        </div>
    );
}