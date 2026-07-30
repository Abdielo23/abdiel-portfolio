import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { asset } from "../constants";

const IMAGES = [
  { src: asset("img1.webp"), width: 900, height: 662 },
  { src: asset("img2.webp"), width: 900, height: 1200 },
  { src: asset("img3.webp"), width: 900, height: 600 },
  { src: asset("img4.webp"), width: 900, height: 1600 },
  { src: asset("img5.webp"), width: 900, height: 1600 },
];

export default function ImageSlideshow() {

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-full"
    >
      {IMAGES.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            width={image.width}
            height={image.height}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}