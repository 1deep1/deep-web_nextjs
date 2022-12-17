import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Montserrat } from '@next/font/google';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import logo from '../assets/images/logo.webp'

const lora = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-lora'
})

export default function Layout({ Component, pageProps, children }) {
  const path = useRouter().pathname
  
  return (
    <main className={lora.variable}>
      <section className='sticky top-0 bg-deep_gray z-10 px-10'>
        <nav className='flex justify-between items-center m-auto max-w-[1300px] py-6'>
          <Link href='/'><Image
            src={logo}
            alt='deep'
          /></Link>
          <div className='flex gap-24 items-center font-lora text-xl'>
          <ul className='flex gap-8'>
            <li><Link href='works' className='opacity-80 hover:opacity-100 duration-75'>Работы</Link></li>
            <li><Link href='about' className='opacity-80 hover:opacity-100 duration-75'>Обо мне</Link></li>
            <li><Link href='#' className='opacity-80 hover:opacity-100 duration-75'>Резюме</Link></li>
          </ul>
          <Link href='#' className='px-10 py-2 border-2 border-white rounded-xl hover:opacity-80 duration-75'>Заказ!</Link>
          </div>
        </nav>
      </section>

      <div className='relative'>
        <div className='relative -z-10 -mt-10 mx-auto max-w-[1300px] leading-[70px] pt-48'>
          <FlowComponent />
        </div>
        <section className='absolute top-0 w-full px-10'>
          <div className='max-w-[1300px] m-auto w-full'>
            <div className='pt-2'>
              <FlowText className='font-bold' opacityStep={30} />
              {children}
            </div>
          </div>
        </section>
      </div>

      <section className='bg-deep_gray z-10'>
        <div className='flex flex-col gap-12 justify-center items-center py-12'>
          <p className='font-lora text-lg opacity-25'>[ dev by deep ]</p>
          <ul className='flex gap-10'>
          <li><Link href='tg://resolve?domain=deep0D' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faTelegram} color={'#fff'} size={'3x'} /></Link></li>
          <li><Link href='whatsapp://send?phone=79689374217' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faWhatsapp} color={'#fff'} size={'3x'} /></Link></li>
          <li><Link href='mailto:mail@1deep1.com' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faEnvelope} color={'#fff'} size={'3x'} /></Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function FlowText({ opacityStep, className }) {
  const path = useRouter().pathname
  return <h1 className={`font-lora font text-[150px] ${className}`} style={ {opacity: opacityStep*0.01} }>{path == '/' ? 'Смотри глубже' : path}</h1>
}

function FlowComponent() {
  let data = [], step=0, range=30, opacity;

  for (let i=0; i<12; i++) {
    opacity=range-step
    range-=step
    if (i === 0) step=4, opacity=0
    if (i === 2) step=2
    data.push(<FlowText className="" opacityStep={opacity} key={i} />)
  }

  return data
}
