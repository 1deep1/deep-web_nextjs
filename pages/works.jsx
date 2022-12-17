import React from 'react'
import HeadSeo from '../components/HeadSeo'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function works() {
    const { t } = useTranslation("common")
  return (
    <>
    <HeadSeo
    //   title={t("title")}
    //   description={t("description")}
    title='Работы'
      ogType={"website"}
    />
    <div>Работы</div>
    </>
  )
}

export const getServerSideProps = async({ locale }) => {
    return {
      props: {
        locale,
        ...(await serverSideTranslations(locale, "common")),
      }
    }
  }