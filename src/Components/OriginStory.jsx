import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/page6.jpg';

function OriginStory() {
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <section className="mt-40 w-full max-w-[1310px] max-md:mt-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:relative">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full max-md:p-7 max-md:z-10 bg-gradient-to-b from-[rgba(255,255,255,0.27)] to-white via-[rgba(255,255,255,0.6)]" data-aos="zoom-in-right">
          <div className="flex flex-col items-start self-stretch my-auto max-md:mt-2 ">
            <h2 className="self-stretch text-5xl text-center text-zinc-800 max-md:text-4xl">
              Born from a Passion <br /> for Women's Health
            </h2>
            <div className="flex shrink-0 mt-10 h-1.5 bg-custom rounded-[50px] w-[154px] max-md:mt-10 max-md:self-center" />
            <p className="mt-10 text-base text-zinc-800 max-md:mt-10">
              Vajuvenate was created by a group of five women gynecologists who were frustrated by the lack of effective, natural solutions for vaginal dryness and itchiness. Together, they formulated a product that combines clinical expertise with natural ingredients, providing women with a safe and effective option for their most intimate part. Our mission is to empower women to take control of their intimate health with confidence.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full max-md:absolute max-md:bottom-0">
          <img 
            src={image} 
            alt="Group of women gynecologists collaborating" 
            className="object-contain grow w-full aspect-[1.36] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default OriginStory;