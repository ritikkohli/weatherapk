import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';
import { useState } from 'react';



export default function Carousel(props){
    const [hour,setHour] = useState(new Date().getHours())
    // let hour = new Date().getHours();
    let suffix = 'AM'
    // if(hour>11){
    //   suffix = 'PM';
    //   hour = hour - 12
    // }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

  return (
    <div className='carousel-container'>
          <Slider {...settings}>
            <div className='carousel-card'>
              <p>Now</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            <div className='carousel-card'>
              <p>{hour+1+' '+suffix}</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            <div className='carousel-card'>
              <p>{hour+2+' '+suffix}</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            <div className='carousel-card'>
              <p>{hour+3+' '+suffix}</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            <div className='carousel-card'>
              <p>{hour+4+' '+suffix}</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div><div className='carousel-card'>
              <p>{hour+5+' '+suffix}</p>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            <div className='carousel-card'>
              <img alt='image' src='../src/assets/sun.png'/>
              <p>40' c</p>
            </div>
            </Slider>
          </div>
  )
}
