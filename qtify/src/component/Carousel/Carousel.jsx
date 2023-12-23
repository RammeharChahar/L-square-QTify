import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Card from "../Card/Card";
import { useEffect, useRef } from "react";
import leftIcon from "../../assets/left-slide.svg";
import rightIcon from "../../assets/right-slide.svg";

function Carousel({ data2 ,type}) {
  const swiperRef = useRef(null);
  const swiper = useSwiper();
  const CustomPrevButton = () => (
    <button
      className={styles.prevButton}
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <img src={leftIcon}></img>
    </button>
  );
  const CustomNextButton = () => (
    <button
      className={styles.nextButton}
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <img src={rightIcon}></img>
    </button>
  );

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={7}
        onReachEnd={() => {
          console.log("slide ended");
        }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
      >
        {data2.map((ele) => (
          <SwiperSlide>
            <Card data1={ele} type={type}/>
          </SwiperSlide>
        ))}
        <div className={styles.customContainer}>
          <CustomPrevButton />
          <CustomNextButton />
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
