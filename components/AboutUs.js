// import React from 'react';
// import { Button, Container } from '.';
// import { Reveal } from 'react-awesome-reveal';
// import { fadeInDownShorter2, fadeInLeft } from '@/keyframes';
// import Image from 'next/image';
// const AboutUs = () => {
//   return (
//     <Container className={'mb-44 scroll-mt-10'} id='about'>
//       <div className='text-center mb-8'>
//         <h2 className='font-bold text-3xl mb-2'>About Us</h2>
//         <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
//           <p className='opacity-50 w-full  sm:w-[400px] mx-auto'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </Reveal>
//       </div>
//       <div className='flex items-center'>
//         <div className='w-[44%] hidden sm:block'>
//           <Reveal keyframes={fadeInLeft} triggerOnce>
//             <div className='relative w-full h-[700px] rounded-2xl overflow-hidden'>
//               <Image
//                 layout='fill'
//                 objectFit='cover'
//                 objectPosition={'center'}
//                 src='/aboutus.png'
//                 alt='about us'
//               />
//             </div>
//           </Reveal>
//         </div>
//         <div className='flex-1 ml-0 sm:ml-10 lg:ml-20'>
//           <h3 className='font-bold text-2xl mb-3'>Get Popular NFT</h3>
//           <p className='mb-3 opacity-50'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
//             turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
//             nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
//             tellus elit sed risus. Maecenas eget condimentum velit, sit amet
//             feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
//             enim egestas, ac scelerisque ante pulvinar.{' '}
//           </p>
//           <p className='mb-3 opacity-50'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
//             turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
//             nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
//             tellus elit sed risus. Maecenas eget condimentum velit, sit amet
//             feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
//             enim egestas, ac scelerisque ante pulvinar.{' '}
//           </p>
//           <p className='hidden lg:block mb-3 opacity-50'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
//             turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
//             nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
//             tellus elit sed risus. Maecenas eget condimentum velit, sit amet
//             feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
//             conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
//             enim egestas, ac scelerisque ante pulvinar.{' '}
//           </p>
//           <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
//             <Button variant={'primary'}>Show more</Button>
//           </Reveal>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default AboutUs;

import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
// import Image from "next/image";
import v from "../public/icons/q.mp4";

const AboutUs = () => {
  return (
    <Container className={"mb-44 scroll-mt-10"} id="about">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">About CSD Gaadi</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[400px] mx-auto">
            CSD Gaadi is your one-stop destination for exclusive vehicle deals
            for defence and army personnel. We offer a wide range of 2-wheelers,
            4-wheelers, and electric bikes at unbeatable prices.
          </p>
        </Reveal>
      </div>
      <div className="flex items-center">
        <div className="w-[44%] hidden sm:block relative">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden">
              {/* Video Element: Plays continuously and automatically */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={v} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </div>
        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <h3 className="font-bold text-2xl mb-3">
            Exclusive Deals for Defence Personnel
          </h3>
          <p className="mb-3 opacity-50">
            At CSD Gaadi, we provide exclusive offers and discounts on vehicles
            for all defence and army personnel. Whether it's a 2-wheeler,
            4-wheeler, or even an electric bike, we ensure that the process is
            simple, quick, and transparent.
          </p>
          <p className="mb-3 opacity-50">
            Our mission is to make mobility easy and affordable for our armed
            forces by providing vehicles at special prices and financing options
            that suit their needs.
          </p>

          <h3 className="font-bold text-2xl mb-3">
            Insurance & Financing Options
          </h3>
          <p className="mb-3 opacity-50">
            We understand that purchasing a vehicle is a significant investment.
            That’s why we offer comprehensive insurance plans to safeguard your
            vehicle. Our insurance packages are designed to provide complete
            coverage, ensuring peace of mind for our customers.
          </p>
          <p className="mb-3 opacity-50">
            In addition to insurance, we also offer financing options that make
            vehicle ownership even more accessible. Whether you're looking for
            easy EMIs or special defence personnel loans, we have partnered with
            leading financial institutions to give you the best deals.
          </p>

          <h3 className="font-bold text-2xl mb-3">
            Our Commitment to Defence & Army Personnel
          </h3>
          <p className="mb-3 opacity-50">
            We are deeply committed to serving those who serve us. CSD Gaadi’s
            exclusive deals, tailored financing, and insurance options are just
            a few ways we show our gratitude to the brave men and women in
            uniform. We offer top-quality vehicles with the added advantage of
            lower prices and easy payment terms.
          </p>

          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
            <Button variant={"primary"}>Explore Our Vehicles</Button>
          </Reveal>
        </div>
      </div>

      {/* More about the company's services */}
      <div className="mt-16">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-5">Our Services</h2>
          <p className="opacity-50 w-full sm:w-[600px] mx-auto">
            In addition to offering vehicles, we provide end-to-end services
            that cater to all your vehicle needs. From insurance to financing,
            from after-sales support to customisation, we ensure a smooth and
            hassle-free experience for our defence and army customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h4 className="font-bold text-xl mb-2">Insurance Plans</h4>
            <p className="opacity-50">
              We offer a wide range of vehicle insurance plans, including
              third-party, comprehensive, and accident cover to ensure you are
              fully protected.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-2">Easy Financing</h4>
            <p className="opacity-50">
              Flexible EMI options and financing tailored for defence personnel.
              Our partners offer low-interest rates and quick processing to make
              your dream vehicle a reality.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-2">After-Sales Support</h4>
            <p className="opacity-50">
              Our commitment to you doesn't end at the point of sale. We offer
              top-tier after-sales services, including maintenance, repairs, and
              customisation options for your vehicles.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
