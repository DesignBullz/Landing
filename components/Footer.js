import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Logo } from '.';

const Footer = () => {
  return (
    <Container className={'pb-14'}>
      <div className='flex mb-16'>
        <div className='w-[300px] mr-28'>
          <Logo />
          <p className='mt-5'>
            The best NFT marketplace website in the world and feel your
            experience in selling or buy our work
          </p>
        </div>
        <div className='flex-1 grid grid-cols-3 gap-4'>
          <div>
            <p className='font-bold text-xl mb-5'>About</p>
            <div className='flex flex-col'>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Product</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Resource</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Term & Condition</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>FAQ</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Company</p>
            <div className='flex flex-col'>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Our Team</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Partner With Us</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Privacy & Policy</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Features</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Contact</p>
            <div className='flex flex-col'>
              <Link href='/'>
                <a className='mb-4 opacity-50'>+012 3456789</a>
              </Link>
              <Link href='/'>
                <a className='mb-5 opacity-50'>adorableprogrammer@gmail.com</a>
              </Link>
              <div className='flex items-center'>
                <div className='mr-10 cursor-pointer'>
                  <Image
                    src='/icons/youtube.svg'
                    width={34}
                    height={34}
                    alt='youtube'
                  />
                </div>
                <div className='mr-10 cursor-pointer'>
                  <Image
                    src='/icons/discord.svg'
                    width={28}
                    height={28}
                    alt='discord'
                  />
                </div>
                <div className='cursor-pointer'>
                  <Image
                    src='/icons/instagram.svg'
                    width={30}
                    height={30}
                    alt='instagram'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        &copy; <span className='font-bold mr-1'>Joonacode </span>
        Desain By <span className='font-bold ml-1'>Zarror</span>
      </div>
    </Container>
  );
};

export default Footer;