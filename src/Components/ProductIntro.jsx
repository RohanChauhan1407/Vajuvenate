import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/page1-img.png';

function ProductIntro() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <section className="bg-purple-800 mb-0 pb-6 pl-10 max-md:pt-10 max-md:p-7 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start mr-0 font-bold text-white max-md:max-w-full">
            <div className="flex flex-col self-stretch pl-1.5 text-7xl max-md:max-w-full max-md:text-4xl">
              <h1 className="text-6xl max-md:max-w-full max-md:text-4xl font-serif" data-aos="fade-down">
                Natural Moisture <br /> for Your Most <br /> Intimate Part
              </h1>
              <div className="flex shrink-0 mt-14 h-1.5 bg-white rounded-[50px] w-[154px] max-md:mt-10" />
            </div>
            <p className="mt-12 text-xl text-white text-opacity-70 max-md:mt-10 max-md:max-w-full" data-aos="fade-right">
              All-natural, clinically tested vulvar cream developed <br /> by five women gynecologists. <br /> <br /> Say goodbye to vaginal dryness and itchiness-naturally
            </p>
            <a href="https://www.amazon.sg/VAJUVENATE-Vulvar-Cream-Anti-Itch-Moisturizer/dp/B095L4Q1BT">
            <button className="font-mono px-14 py-3 mt-20 text-4xl bg-rose-500 border-4 border-rose-500 rounded-[60px] max-md:px-5 max-md:text-2xl max-md:mt-10 hover:bg-opacity-75">
              Shop Now
            </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <img 
            src={image} 
            alt="Woman smiling, representing comfort and confidence" 
            className="object-contain mt-16 w-full aspect-[1.59] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductIntro;