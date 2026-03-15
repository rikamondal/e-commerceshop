import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";

const Slider = () => {
  return (
    <>
    <h1>🥳50% OFF</h1>
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide><img src="https://img0.junaroad.com/uiproducts/19126280/zoom_0-1673529652.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://m.media-amazon.com/images/I/71mPIDkERUL._SY879_.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEyjBxw-Immi4QLpHKSBgvqvbbeZZiGF80oOzZWwtnXpabVWG3QXwoqJ28YjL1UdQf9GEvjtva3VEiSPx7WzUm0BDNcliXJw" /></SwiperSlide>
    </Swiper>
    </>
  );
};

export default Slider;