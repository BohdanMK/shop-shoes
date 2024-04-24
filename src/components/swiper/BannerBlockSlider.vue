<script setup>
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    const modules = [ Navigation, Pagination, Scrollbar, Autoplay ];

    const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {

      };

      const props = defineProps({
        slides: {
            type: Array,
            required: true
        }
      });

      const prev = ref(null);
      const next = ref(null);

</script>

<template>
  <div class="hidden md:block relative ">
    <swiper
        :modules="modules"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        :pagination="{ clickable: true }"

        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 5000 }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="banner-slider mb-8 relative"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        :modules="modules"
        :style="{ 'background-image': `url(${slide.background})`  }"
        class=" bg-no-repeat bg-cover bg-center banner-item"
    >
        <div class="banner__slider-embet">
            <h3 class=" xl:text-4xl lg:text-3xl text-2xl text-black-600 font-bold  max-w-60 colored-last-word mb-5 text-center"

            >
                {{ slide.label }}
            </h3>
            <router-link :to="`/product/${slide.product_id}`" class="banner__btn w-full block text-lg text-white bg-gray-800 transition-all  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Купить
            </router-link>
        </div>


      </swiper-slide>

    </swiper>

    <div ref="prev" class="swiper-button-prev">
      <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
        <g filter="url(#filter0_d_60_240)">
        <rect x="43" y="39" width="35" height="35" rx="17.5" transform="rotate(-180 43 39)" fill="white"/>
        </g>
        <path d="M24 17L29 22L24 27" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <filter id="filter0_d_60_240" x="0" y="0" width="51" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="4"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_240"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_240" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
    <div ref="next" class="swiper-button-next">
      <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g filter="url(#filter0_d_60_240)">
        <rect x="43" y="39" width="35" height="35" rx="17.5" transform="rotate(-180 43 39)" fill="white"/>
        </g>
        <path d="M24 17L29 22L24 27" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <filter id="filter0_d_60_240" x="0" y="0" width="51" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="4"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_240"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_240" result="shape"/>
        </filter>
        </defs>
      </svg>

    </div>
  </div>
  </template>

  <style scoped>

    h3:after{
      content:attr(data-text);
      color:black;
      transform:translateX(-100%);
      position:absolute;
    }



    .banner-item {
      /* max-width: 1260px; */
        /* min-height: 550px; */
        background-repeat: no-repeat;
        background-size:cover;
        border-radius: 40px;
    }

    .colored-last-word:last-word {
      color: red;
    }


    .banner__slider-embet {
        padding: 148px 68px 171px 68px;
    }

    .banner__btn {
      width: 100%;
      max-width: 240px;

      text-align: center;

      cursor: pointer;
    }

    .swiper-button-next, .swiper-button-prev {
      width: 74px!important;
      height: 74px!important;
      max-width: 100%;
      cursor: pointer;
      /* top: 60px; */
    }

    .swiper-button-next {
      right: -3%;
    }

    .swiper-button-prev {
      left: -3%;
    }

    .swiper-button-next::after, .swiper-button-prev::after {
      display: none!important;
    }



    .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: white!important;
    }

    @media (max-width: 1540px) {
      .banner__slider-embet {
        padding: 98px 68px 91px 68px;
      }
    }

    @media (max-width: 1280px) {
      .banner__slider-embet {
        padding: 58px 68px 91px 68px;
      }
    }

    @media (max-width: 1020px) {
      .banner__slider-embet {
        padding: 58px 28px 51px 68px;
      }

      .banner-item {
        height: 220px;
      }

      .banner__btn {
        max-width: 160px;
        margin-left: 34px;
      }
    }

</style>