import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Logo } from ".";

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Container className={"pb-10"}>
      <div className="flex flex-col lg:flex-row mb-16">
        <div className="w-[300px] mb-10 lg:mb-0 mr-10 lg:mr-28">
          <Logo />
          <p className="mt-5">
            Invest smartly with SIP. Start your journey towards financial
            freedom with flexible and trusted plans.
          </p>
        </div>

        {/* About, Company, and Contact Information */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold text-xl mb-5">About</p>
            <div className="flex flex-col">
              <Link href="/">
                <a className="mb-4 opacity-50">Our Story</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">SIP Plans</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">Customer Testimonials</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">Investment Tips</a>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-xl mb-5">Company</p>
            <div className="flex flex-col">
              <Link href="/">
                <a className="mb-4 opacity-50">Our Team</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">Partner With Us</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">Privacy Policy</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50">Terms & Conditions</a>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-xl mb-5">Contact</p>
            <div className="flex flex-col">
              <Link href="/">
                <a className="mb-4 opacity-50">+91 123 456 7890</a>
              </Link>
              <Link href="/">
                <a className="mb-5 opacity-50">www.rgfundsinvest.com</a>
              </Link>
              <div className="flex items-center">
                <div className="mr-10 cursor-pointer">
                  <Image
                    src="/icons/facebook.svg"
                    width={34}
                    height={34}
                    alt="facebook"
                  />
                </div>
                <div className="mr-10 cursor-pointer">
                  <Image
                    src="/icons/instagram.svg"
                    width={30}
                    height={30}
                    alt="instagram"
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    src="/icons/youtube.svg"
                    width={34}
                    height={34}
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="flex justify-center items-center mb-8">
        &copy; <span className="font-bold mr-1">RGFUNDS 2024</span> | Designed
        by <span className="font-bold ml-1">DesignBullz</span>
      </div>

      {/* Scroll To Top Button */}
      <div
        onClick={scrollToTop}
        className="animate-bounce h-14 w-14 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-full bg-gradient-to-b font-bold from-[#B75CFF] to-[#671AE4] mx-auto flex justify-center items-center"
      >
        UP
      </div>
    </Container>
  );
};

export default Footer;
