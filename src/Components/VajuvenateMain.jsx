import React from 'react';
import Header from './Header';
import ProductIntro from './ProductIntro';
import SolutionSection from './SolutionSection';
import DifferenceSection from './DifferenceSection';
import TestimonialSection from './TestimonialSection';
import ReliefSteps from './ReliefSteps';
import OriginStory from './OriginStory';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

function VajuvenateMain() {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-32 bg-white max-md:pb-24">
      <Header />
      <ProductIntro />
      <SolutionSection />
      <DifferenceSection />
      <TestimonialSection />
      <ReliefSteps />
      <OriginStory />
      <FAQSection />
      <CallToAction />
    </main>
  );
}

export default VajuvenateMain;