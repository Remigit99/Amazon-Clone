
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Header.css';
// import "./styles.css";



//Import Sliders Images

import Slider1 from '../../Assets/slider-bg-1.jpg';
import Slider2 from '../../Assets/slider-bg-2.jpg';
import Slider3 from '../../Assets/slider-bg-3.jpg';
import Slider4 from '../../Assets/slider-bg-4.jpg';
import Slider5 from '../../Assets/slider-bg-5.jpg';



// export default function App() {
//   return (
//     <>

//     </>
//   );
// }




function Header() {
    return (

        <Swiper
            slidesPerView={1}
            Navigation={true}
            scrollbar={{ draggable: true }}
            spaceBetween={5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation, Scrollbar]}
            className="mySwiper"

        >
            <SwiperSlide>
                <img src={Slider5} alt="slider-5" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Slider2} alt="slider-2" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Slider3} alt="slider-3" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Slider4} alt="slider-4" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Slider1} alt="slider-1" />
            </SwiperSlide>

        </Swiper>
        // <Swiper
        //     // install Swiper modules
        //     modules={[Navigation, Pagination, Scrollbar]}
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     navigation
        //     pagination={{ clickable: true }}
        //     scrollbar={{ draggable: true }}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log('slide change')}
        // >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        // </Swiper>


    )
}

export default Header;