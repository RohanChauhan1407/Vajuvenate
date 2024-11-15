import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive:[
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplaySpeed: 3000,
      }
    }
  ]
};

function FAQSection() {
  const faqs = [
    {
      question: "Is Vajuvenate safe to use every day?",
      answer: "Yes, Vajuvenate is made with all-natural ingredients and is safe for daily use."
    },
    {
      question: "How quickly will I feel relief?",
      answer: "Many Women experience relief within minutes of applying vajuvenate."
    },
    {
      question: "Is Vajuvenate suitable for sensitive skin?",
      answer: "Absolutely! Our formula is gentle and designed to soothe even the most sensitive skin."
    }
  ];

  return (
    <section className="mt-40 w-screen max-w-screen max-md:mt-10 max-md:max-w-full">
      <h2 className="font-serif text-5xl font-bold text-neutral-700 text-center max-md:mt-10 max-md:max-w-full max-md:text-3xl">
        Got Question? We've Got Answers
      </h2>
      <div className="mt-36 max-md:mt-10">
        <Slider {...settings}>
        {faqs.map((faq, index) => (
          <div key={index} className={`flex flex-col w-1/4 max-md:ml-0 max-md:w-full`}>
            <div className="flex flex-col font-bold text-center items-center h-96 p-10 allside max-md:mt-10">
              <h3 className="text-3xl text-purple-800 max-md:text-2xl">
                {faq.question}
              </h3>
              <div className="flex shrink-0 self-center mt-8 h-1 bg-custom rounded-[50px] w-[120px]" />
              <p className="mt-7 text-md max-md:text-sm text-neutral-700 w-1/2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </section>
  );
}

export default FAQSection;
