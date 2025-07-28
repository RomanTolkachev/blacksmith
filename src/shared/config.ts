import { ReactNode } from "react"

type TGalleryItem = { src: string, width: number, height: number }

export type DataItem = {
    name: string
    href: string
    icon?: ReactNode
    galleryPaths: TGalleryItem[],
    description?: string // Опциональное поле для описания
}

export const services: DataItem[] = [
    {
        name: "Балконы и ограждения",
        href: "balconies",
        galleryPaths: [
            // {
            //     "src": "/balcony/b_01.jpg",
            //     "width": 3504,
            //     "height": 4672
            // },
            {
                "src": "/balcony/b_02.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_03.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/balcony/b_04.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_05.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_06.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_07.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_08.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/balcony/b_09.jpg",
                "width": 4000,
                "height": 3000
            },
            {
                "src": "/balcony/b_10.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_11.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_12.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_13.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_14.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_15.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/balcony/b_16.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/balcony/b_17.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/balcony/b_18.jpg",
                "width": 8000,
                "height": 6000
            },
            {
                "src": "/balcony/b_19.jpg",
                "width": 8000,
                "height": 6000
            }
        ],
        description: "Надёжная защита с художественной ковкой"
    },
    {
        name: "Ворота и калитки",
        href: "gates",
        galleryPaths: [
            {
                "src": "/gates/v_01.jpg",
                "width": 1832,
                "height": 3264
            },
            {
                "src": "/gates/v_02.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_03.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_04.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_05.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_06.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_07.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_08.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_09.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_10.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_11.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_12.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_13.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_14.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_15.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_16.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_17.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_18.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_19.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_20.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_21.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gates/v_22.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gates/v_23.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_24.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_25.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_26.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_27.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_28.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_29.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_30.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_31.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_32.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_33.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_34.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_35.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_36.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_37.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_38.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_39.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_40.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_41.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_42.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_43.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_44.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_45.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_46.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_47.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_48.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gates/v_49.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_50.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_51.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/gates/v_52.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/gates/v_53.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/gates/v_54.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/gates/v_55.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/gates/v_56.jpg",
                "width": 8000,
                "height": 6000
            }
        ],
        description: "Элегантные решения для въезда"
    },
    {
        name: "Перила и лестницы",
        href: "railings",
        galleryPaths: [
            {
                "src": "/railings/p_01.jpg",
                "width": 3264,
                "height": 1832
            },
            {
                "src": "/railings/p_02.jpg",
                "width": 1832,
                "height": 3264
            },
            {
                "src": "/railings/p_03.jpg",
                "width": 960,
                "height": 1280
            },
            {
                "src": "/railings/p_04.jpg",
                "width": 1152,
                "height": 864
            },
            {
                "src": "/railings/p_05.jpg",
                "width": 1280,
                "height": 960
            },
            {
                "src": "/railings/p_06.jpg",
                "width": 3120,
                "height": 4160
            },
            {
                "src": "/railings/p_07.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_08.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_09.jpg",
                "width": 3456,
                "height": 4608
            },
            {
                "src": "/railings/p_10.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/railings/p_11.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_12.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_13.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_14.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/railings/p_15.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_16.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_17.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_18.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_19.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_20.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/railings/p_21.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/railings/p_22.jpg",
                "width": 4000,
                "height": 3000
            },
            {
                "src": "/railings/p_23.jpg",
                "width": 3000,
                "height": 4000
            },
            {
                "src": "/railings/p_24.jpg",
                "width": 3000,
                "height": 4000
            },
            {
                "src": "/railings/p_25.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_26.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_27.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/railings/p_28.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/railings/p_29.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_30.jpg",
                "width": 1440,
                "height": 1440
            },
            {
                "src": "/railings/p_31.jpg",
                "width": 1440,
                "height": 1440
            },
            {
                "src": "/railings/p_32.jpg",
                "width": 1440,
                "height": 1440
            },
            {
                "src": "/railings/p_33.jpg",
                "width": 1440,
                "height": 1440
            },
            {
                "src": "/railings/p_34.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_35.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_36.jpg",
                "width": 4608,
                "height": 3456
            },
            {
                "src": "/railings/p_37.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/railings/p_38.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_39.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_40.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_41.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/railings/p_42.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/railings/p_43.jpg",
                "width": 9000,
                "height": 12000
            },
            {
                "src": "/railings/p_44.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/railings/p_45.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/railings/p_46.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/railings/p_47.jpg",
                "width": 8000,
                "height": 6000
            },
            {
                "src": "/railings/p_48.jpg",
                "width": 720,
                "height": 720
            },
            {
                "src": "/railings/p_49.jpg",
                "width": 6000,
                "height": 8000
            }
        ],
        description: "Безопасность с индивидуальным дизайном"
    },
    {
        name: "Мангалы и печи",
        href: "grills",
        galleryPaths: [
            {
                "src": "/grills/m_01.jpg",
                "width": 2048,
                "height": 1536
            },
            {
                "src": "/grills/m_02.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/grills/m_03.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/grills/m_04.jpg",
                "width": 4608,
                "height": 3456
            },
            {
                "src": "/grills/m_05.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/grills/m_06.jpg",
                "width": 4000,
                "height": 3000
            },
            {
                "src": "/grills/m_07.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/grills/m_08.jpg",
                "width": 4608,
                "height": 3456
            },
            {
                "src": "/grills/m_09.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/grills/m_10.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/grills/m_11.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/grills/m_12.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/grills/m_13.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/grills/m_14.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/grills/m_15.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/grills/m_16.jpg",
                "width": 8000,
                "height": 6000
            },
            {
                "src": "/grills/m_17.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/grills/m_18.jpg",
                "width": 4800,
                "height": 2160
            },
            {
                "src": "/grills/m_19.jpg",
                "width": 6000,
                "height": 8000
            },
            {
                "src": "/grills/m_20.jpg",
                "width": 8000,
                "height": 6000
            }
        ],
        description: "Долговечные изделия для отдыха"
    },
    {
        name: "Навесы и козырьки",
        href: "canopies",
        galleryPaths: [
            {
                "src": "/canopies/n_01.jpg",
                "width": 3264,
                "height": 1832
            },
            {
                "src": "/canopies/n_02.jpg",
                "width": 960,
                "height": 1280
            },
            {
                "src": "/canopies/n_03.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/canopies/n_04.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/canopies/n_05.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_06.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_07.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_08.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/canopies/n_09.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/canopies/n_10.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_11.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_12.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_13.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_14.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_15.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/canopies/n_16.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/canopies/n_17.jpg",
                "width": 3000,
                "height": 4000
            },
            {
                "src": "/canopies/n_18.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/canopies/n_19.jpg",
                "width": 4608,
                "height": 3456
            },
            {
                "src": "/canopies/n_20.jpg",
                "width": 3968,
                "height": 2976
            },
            {
                "src": "/canopies/n_21.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/canopies/n_22.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/canopies/n_23.jpg",
                "width": 9280,
                "height": 6944
            },
            {
                "src": "/canopies/n_24.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/canopies/n_25.jpg",
                "width": 6944,
                "height": 9280
            },
            {
                "src": "/canopies/n_26.jpg",
                "width": 720,
                "height": 720
            }
        ],
        description: "Защита от непогоды с элементами декора"
    },
    {
        name: "Беседки",
        href: "gazebos",
        galleryPaths: [
            {
                "src": "/gazebos/bs_01.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gazebos/bs_02.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gazebos/bs_03.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gazebos/bs_04.jpg",
                "width": 9280,
                "height": 6944
            }
        ],
        description: "Уютные металлические конструкции"
    },
    {
        name: "Решётки",
        href: "gratings",
        galleryPaths: [
            {
                "src": "/gratings/r_01.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gratings/r_02.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gratings/r_03.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gratings/r_04.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/gratings/r_05.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/gratings/r_06.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gratings/r_07.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/gratings/r_08.jpg",
                "width": 2976,
                "height": 3968
            }
        ],
        description: "Защитные изделия с художественным узором"
    },
    {
        name: "Реставрация",
        href: "restoration",
        galleryPaths: [
            {
                "src": "/restoration/rs_01.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_02.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_03.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/restoration/rs_04.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/restoration/rs_05.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_06.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_07.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/restoration/rs_08.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_09.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/restoration/rs_10.jpg",
                "width": 3504,
                "height": 4672
            },
            {
                "src": "/restoration/rs_11.jpg",
                "width": 4672,
                "height": 3504
            },
            {
                "src": "/restoration/rs_12.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_13.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_14.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_15.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_16.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_17.jpg",
                "width": 2976,
                "height": 3968
            },
            {
                "src": "/restoration/rs_18.jpg",
                "width": 2976,
                "height": 3968
            }
        ],
        description: "Восстановление старинных кованых изделий"
    }
]