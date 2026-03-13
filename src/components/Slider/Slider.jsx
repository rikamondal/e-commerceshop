import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";

const Slider = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTD2-jQX7rB2_h_iapR0OgZm_Uz-A-W9VnDyiSTpQB5WyMZni0mE_Xqyta9z7K19o_38GI7TGbZhcS4AIUJEBIJFRgJetRq5sAUzi5NCRym11C7g9SJNZvZGQ" /></SwiperSlide>
      <SwiperSlide><img src="https://m.media-amazon.com/images/I/71mPIDkERUL._SY879_.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEyjBxw-Immi4QLpHKSBgvqvbbeZZiGF80oOzZWwtnXpabVWG3QXwoqJ28YjL1UdQf9GEvjtva3VEiSPx7WzUm0BDNcliXJw" /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;