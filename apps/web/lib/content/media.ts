import type { ImageAsset } from "./types";

export const brandImages = {
  homeHero: {
    src: "/images/space/main-lobby.jpg",
    alt: "Входная зона пространства «Разум и Тело»",
    purpose: "hero"
  },
  mikhailPortrait: {
    src: "/images/team/mikhail-main.jpg",
    alt: "Михаил в пространстве «Разум и Тело»",
    purpose: "team"
  },
  spaceLobby: {
    src: "/images/space/main-lobby.jpg",
    alt: "Зона ресепшн пространства «Разум и Тело»",
    purpose: "space"
  },
  spaceRoomOne: {
    src: "/images/space/location-1.jpg",
    alt: "Кабинет пространства «Разум и Тело» с мягким светом",
    purpose: "space"
  },
  spaceRoomTwo: {
    src: "/images/space/location-2.jpg",
    alt: "Интерьер пространства «Разум и Тело»",
    purpose: "space"
  },
  spaceRoomThree: {
    src: "/images/space/location-3.jpg",
    alt: "Интерьер кабинета с деревянными поверхностями и тёплой атмосферой",
    purpose: "space"
  }
} as const satisfies Record<string, ImageAsset>;
