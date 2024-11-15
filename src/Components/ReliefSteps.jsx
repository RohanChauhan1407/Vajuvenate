import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import step1 from '../assets/page5.jpg';
import step2 from '../assets/page5 (1).jpg';
import step3 from '../assets/page5 (2).jpg';

function ReliefSteps() {
  useEffect(()=>{
    AOS.init();
  },[]);

  const steps = [
    { number: 1, img:step1, action: "APPLY", description: "Use a small amount of vajuvenate on the affected area." },
    { number: 2, img:step2, action: "RELAX", description: "Let the natural ingredients do their work, soothing and moisturizing your skin and easing discomfort" },
    { number: 3, img:step3, action: "FEEL IT", description: "Experience fast-acting relief that lasts, helping you feel confident and comfortable." }
  ];

  return (
    <section className="flex flex-col items-center self-stretch px-20 py-36 mt-64 w-full text-white bg-rose-300 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl text-center max-md:max-w-full max-md:text-2xl">
        Simple, Effective Relief in Just a Few Steps.
      </h2>
      <div className="flex flex-wrap gap-5 justify-between mt-32 w-full max-md:mt-10 max-md:max-w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-1/4 text-center max-md:w-full" data-aos="zoom-in-up">
            <img 
              src={step.img} 
              alt={`Step ${step.number} illustration`} 
              className="object-contain max-w-full aspect-[0.64] w-[111px]"
            />
            <h3 className="mt-16 text-3xl max-md:mt-10">Step {step.number}</h3>
            <div className="self-stretch mt-4 text-4xl tracking-[10.5px]">{step.action}</div>
            <div className="w-full mt-3">{step.description}</div>
          </div>
          
        ))}
      </div>      
    </section>
  );
}

export default ReliefSteps;