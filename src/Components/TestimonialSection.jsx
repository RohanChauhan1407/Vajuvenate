import React from 'react';
import Slider from "react-slick";


function TestimonialSection() {
  const reviews = [
    {
      name: "Sarah M.",
      review: "I've tried many creams, but Vajuvenate is by far the best! It has a light texture, absorbs quickly, and I felt a difference in just a few days. I highly recommend it to anyone looking for a comfortable solution."
    },
    {
      name: "Lisa P.",
      review: "Vajuvenate has been a game-changer! I was initially skeptical, but after using it consistently for a week, I noticed a significant improvement. It's gentle and doesn’t irritate—definitely a product I’ll continue using!"
    },
    {
      name: "Jennifer R.",
      review: "I absolutely love Vajuvenate! It’s refreshing and has made such a positive impact on my comfort level. Plus, the packaging is discreet, which I really appreciate. Highly recommended!"
    },
    {
      name: "Emma L.",
      review: "Vajuvenate is amazing! I was hesitant at first, but after reading about its benefits, I decided to try it. It's made a huge difference, and the scent is pleasant too. I’ll be buying this again!"
    },
    {
      name: "Natalie C.",
      review: "This cream has been fantastic. I could feel a change in hydration and comfort levels right away. It's gentle and soothing—would recommend to anyone!"
    },
    {
      name: "Rachel S.",
      review: "I can’t believe how effective Vajuvenate is! I’ve tried other creams, but none have worked this well. My skin feels softer and more hydrated. Definitely worth every penny."
    },
    {
      name: "Monica T.",
      review: "I was looking for something gentle and effective, and Vajuvenate fits the bill perfectly. It’s easy to apply, and I’ve had no issues with irritation. My confidence is back!"
    },
    {
      name: "Karen B.",
      review: "So grateful I found Vajuvenate! It’s lightweight, has no strong odor, and provides exactly the kind of relief I was looking for. I’ll be recommending this to my friends!"
    }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="flex flex-col items-center mt-56 max-md:mt-10 max-md:max-w-screen">
      <h2 className="font-serif text-5xl text-center text-stone-900 max-md:max-w-screen max-md:text-4xl">
        Hear from Women Like You
      </h2>
      <div className='w-screen '>
        <Slider {...settings}>
        {reviews.map((person,index)=>(
          <div key={index} className= 'p-4 max-md:w-screen' >
            <blockquote className="mt-24 text-2xl text-center text-zinc-800 max-md:mt-10 max-md:max-w-screen">
              {person.review}
            </blockquote>
            <div className="flex shrink-0 mt-16 h-1.5 bg-custom rounded-[50px] w-[154px] max-md:mt-10" />
            <cite className="mt-7 text-2xl font-bold text-center text-stone-900 tracking-[18px]">
              {person.name}
            </cite>
          </div>
        ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialSection;