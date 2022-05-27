import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import california from '../../Images/New folder/californiaWarehouse.jpg';
import dhaka from '../../Images/New folder/DhakaWarehouse.jpg';
import canada from '../../Images/New folder/canadaWarehouse.jpg';

const WareHouse = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-primary'>Our Warehouse</h1>
            <div className='m-16'>
            <Swiper
                modules= {[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={true}
            >
                <SwiperSlide className='slide'><img className='rounded-lg' src={california} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={dhaka} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={canada} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={california} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={dhaka} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={canada} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={california} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={dhaka} alt="" /></SwiperSlide>
                <SwiperSlide className='slide'><img className='rounded-lg' src={canada} alt="" /></SwiperSlide>

            </Swiper>
        </div>
        </div>
    );
};

export default WareHouse;