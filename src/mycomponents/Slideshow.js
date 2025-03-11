import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images from local assets

import image1 from "../assets/images/young-fashion-woman-holding-shopping-bags-discount-percentage-through-torn-paper-hole-wall.jpg";
import image2 from "../assets/images/tamanna-rumee-Wt33T42JNCM-unsplash.jpg"
import image3 from "../assets/images/discounts.jpg"
const images = [image1, image2, image3];

function Slideshow() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto rounded-lg shadow-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slideshow;
