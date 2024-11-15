import React from 'react';

function DifferenceSection() {
  const differencePoints = [
    {
      title: "Expert-Designed",
      description: "Created by five women gynecologists who understand the unique needs of women's intimate health.",
      align: "right"
    },
    {
      title: "Clinically Tested",
      description: "Our formula has been clinically tested and proven effective by experts in women's health.",
      align: "right"
    },
    {
      title: "Fast-Acting Relief",
      description: "Feel the soothing effects almost immediately, giving you the comfort and confidence you deserve",
      align: "left"
    },
    {
      title: "All-Natural Ingredients",
      description: "We use only the best natural ingredients, free from harsh chemicals and synthetic fragrances.",
      align: "left"
    }
  ];

  return (
    <section className="flex flex-col bg-custom justify-center items-center self-stretch px-20 py-20 w-full max-md:px-5 max-md:max-w-full z-10">
      <div className="flex flex-col w-full max-w-[1206px] max-md:max-w-full">
        <h2 className="font-serif text-6xl text-white text-center self-center max-md:max-w-full max-md:text-4xl">
          What Makes Vajuvenate Different?
        </h2>
        <div className="flex shrink-0 self-center mt-20 h-1.5 bg-white rounded-[50px] w-[154px] max-md:mt-10" />
        <p className="self-center mt-12 text-4xl text-center text-white max-md:mt-10 max-md:max-w-full">
          Trusted, Natural, and Designed Just for you
        </p>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-3xl text-white max-md:mt-10">
                {differencePoints.slice(0, 2).map((point, index) => (
                  <div key={index} className={`${index === 1 ? 'mt-60 max-md:mt-10' : ''}`} data-aos={`${point.align === 'right' ? 'zoom-in-left':'zoom-in-right'}`}>
                    <h3 className={`${point.align === 'right' ? 'text-right' : ''}`}>{point.title}</h3>
                    <p className={`mt-5 text-xl ${point.align === 'right' ? 'text-right' : ''}`}>
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full max-md:hidden">
              <img  
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c4f11a5eb7a7f98c452e07c1d191d2dd52f3cada8434fdd058257558e9e9fb?apiKey=7ef7a3675f914b7d8da2a26731a17ac1&" 
                alt="Vajuvenate product illustration" 
                className="object-contain grow w-full aspect-[0.64] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-20 text-3xl text-white max-md:mt-10">
                {differencePoints.slice(2).map((point, index) => (
                  <div key={index} className={`${index === 1 ? 'mt-60 max-md:mt-10' : ''}`} data-aos={`${point.align === 'right' ? 'zoom-in-left':'zoom-in-right'}`}>
                    <h3 className={`${point.align === 'right' ? 'self-end' : ''}`}>{point.title}</h3>
                    <p className={`mt-5 text-xl ${point.align === 'right' ? 'text-right' : ''}`}>
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferenceSection;