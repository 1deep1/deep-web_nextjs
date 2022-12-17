import React from 'react';
import HeadSeo from '../components/HeadSeo'
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleRight,
  
} from "@fortawesome/free-regular-svg-icons";

export default function Home(props) {
  const { t } = useTranslation("home")
  // setTitle(t("title"))
  // Home.apply({title: 'dsdds'})
  // Home.bind({title: 'dsdds'})
  
  const query = gql`
  query Tests {
    tests(locales: [${props.locale}]) {
      id
      title
    }
  }`;

  const { loading, error, data } = useQuery(query);

  return (
    <>
    <HeadSeo
      title={t("title")}
      description={t("description")}
      ogType={"website"}
    />
    <div className={`deep_grid ${loading ? 'animate-pulse' : null}`}>
      <Link href='about' className='deep_grid__chart backdrop-blur-sm flex flex-col gap-10 justify-center items-start px-8 py-24 bg-deep_light bg-opacity-80 rounded-3xl col-span-2 font-lora hover:bg-deep_main duration-200 ease-in min-h-full'>
        <p className='text-3xl font-semibold deep_grid__textMain'>Веб разработка и не только 🔬</p>
        <p className='font-thin text-xl flex items-center justify-between gap-4'><span className='deep_grid__textSecond '>Проработка вашего заказа до самой глубины.</span><span className='deep_grid__textHide text-white text-7xl font-semibold align-start opacity-0 absolute'>Узнать<br/>подробнее</span>  <FontAwesomeIcon className='deep_grid__ico' icon={faCircleChevronRight} color={'#fff'} size={'2x'} /></p>
      </Link>
      <div className='bg-deep_light rounded-3xl'>2</div>
      <div className='bg-deep_light rounded-3xl'>3</div>
      <Link href='works' className='flex flex-col deep_grid__chart backdrop-blur-sm gap-10 justify-center items-start px-8 py-16 bg-deep_light bg-opacity-80 rounded-3xl font-lora hover:bg-deep_main duration-200 ease-in min-h-full'>
        <FontAwesomeIcon className='deep_grid__logo' icon={faLayerGroup} color={'#fff'} size={'4x'} />

        <div className='flex justify-between items-end w-full deep_grid__square'>
          <p className='text-3xl font-semibold deep_grid__page'>Мои<br/>работы</p>
          <FontAwesomeIcon icon={faCircleChevronRight} color={'#fff'} size={'2x'} />
        </div>
      </Link>
      <div className='bg-deep_light rounded-3xl'>3</div>
      <div className='bg-deep_light rounded-3xl'>3</div>
      <div className='bg-deep_light rounded-3xl'>3</div>
    </div>


    {/* <div className='font-rubik font-bold'>
    {
      loading ?
        <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
    }
      {t("title")}
      {
        data ? <p>{data.tests[0].title}</p> : null
      }
    </div> */}
    </>
  );
}

export const getServerSideProps = async({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, "home")),
    }
  }
}