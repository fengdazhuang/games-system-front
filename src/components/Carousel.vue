<template>
    <swiper :speed="1500" clickableClass="my-pagination-clickable" :pagination="{type:'progressbar'}" :autoplay="{delay:16000}" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <video src="@/assets/images/杭州轮播1.mp4" style="width: 100%;" autoplay="" muted="" loop="" webkit-playsinline="" playsinline="" x5-playsinline="" x-webkit-airplay="allow">
                <!-- <source  type="video/mp4"> -->
            </video>
            <!-- <img src="@/assets/images/banner1.jpg" alt=""> -->
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner5.jpg" alt="">
        </swiper-slide>
    </swiper>
</template>
  <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup () {
        return {
            modules: [Navigation, Autoplay, Pagination],
        };
    },
};
  </script>

  <style lang="scss">
@import '@/assets/style/global.scss';
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper {
    // --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #ff6600; /* 两种都可以 */
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
    content: 'prev';
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
    content: 'next';
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
    display: block;
    width: px2rem(30px);
    height: px2rem(55px);
    font-size: px2rem(25px);
    color: #fff;
    text-align: center;
    line-height: px2rem(55px);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: px2rem(15px);
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
    background-color: orange;
}
// .swiper-horizontal > .swiper-pagination-progressbar,
// .swiper-pagination-progressbar.swiper-pagination-horizontal,
// .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
// .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
//     width: 100%;
//     height: var(--swiper-pagination-progressbar-size, 4px);
//     left: 0;
//     bottom: 0;
// }
</style>