import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/page2.png';

function SolutionSection() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <section className="z-10 self-end h-max w-full max-w-[1377px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col items-center" >
        <div className="flex flex-col w-[45%] h-max max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto p-4 max-md:max-w-full max-md:absolute max-md:z-10 max-md:h-full h-max bg-gradient-to-b from-[rgba(255,255,255,0.27)] to-white via-[rgba(255,255,255,1)]" data-aos="zoom-in-up">
            <h2 className="font-serif mr-10 text-6xl text-neutral-700 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              Finally, a Solution <br /> Created by Women, <br /> for Women.
            </h2>
            <div className="flex shrink-0 mt-16 h-1.5 bg-custom rounded-[50px] w-[154px] max-md:mt-10" />
            <p className="mt-7 text-2xl text-black text-opacity-60 max-md:max-w-full">
              Vajuvenate was born out of a desire to provide real, <br /> effective relief for women dealing with <br /> vaginal dryness and itchiness.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full max-md:relative ">
          <img 
            src={image} 
            alt="Group of women doctors collaborating" 
            className="object-contain grow w-full aspect-[0.91] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;