import React from 'react';

function CallToAction() {
  return (
    <section className="flex flex-col self-stretch mt-48 w-full items-center max-md:mt-10 max-md:max-w-full">
      <h2 className="font-serif px-16 py-14 text-6xl font-bold text-white text-center bg-custom w-full max-md:px-5 max-md:max-w-full max-md:text-2xl">
        Ready for Fast, Natural Relief?
      </h2>
      <a href="https://www.amazon.sg/VAJUVENATE-Vulvar-Cream-Anti-Itch-Moisturizer/dp/B095L4Q1BT">
      <button className="font-mono px-16 py-3.5 mt-28 max-w-1/2 text-4xl font-bold text-white bg-purple-800 rounded-[50px] w-[485px] max-md:px-5 max-md:mt-10 max-md:text-xl">
        Shop Now
      </button>
      </a>
    </section>
  );
}

export default CallToAction;