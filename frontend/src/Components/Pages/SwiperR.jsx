import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../CSS/SwiperR.css';
import { Autoplay, Pagination } from 'swiper/modules';
import MEC1 from '../Images/MEC1.png'
import MEC2 from '../Images/MEC2.png'
import MEC3 from '../Images/MEC3.png'
import MEC4 from '../Images/MEC4.png'
import MEC5 from '../Images/MEC5.png'
import MEC6 from '../Images/MEC6.png'
import MEC7 from '../Images/MEC7.png'


export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={MEC1} alt='No Image...' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MEC7} alt='No Image...' />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={MEC5} alt='No Image...' />
        </SwiperSlide>
         <SwiperSlide>
          <img src={MEC4} alt='No Image...' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
