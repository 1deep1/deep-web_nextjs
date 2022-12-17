import Head from "next/head"
import siteMetadata from "../data/siteMetadata"
import { useRouter } from 'next/router';

const HeadSeo = ({
    title,
    description,
    canonicalUrl,
    ogType,
    children
}) => {
    const router = useRouter()
    const path = router.pathname

    return (
        <Head>
            //basic metadata
            {title
            ? <title>{title + ' | deep'}</title>
            : <title>{description}</title>}
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content="deep, it, web, react, developer" />
            <link rel="alternate" hrefLang='en' href={`/en${path}`} />
            <link rel="alternate" hrefLang='ru' href={`/ru${path}`} />
            //twitter metadata
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={siteMetadata.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={siteMetadata.siteLogoSquare} />
            //canonical link
            <link rel="canonical" href={`${siteMetadata.siteUrl}/${router.locale}/${path}`} />
            //open graph metadata
            <meta property="og:locale" content={router.locale} />
            <meta property="og:site_name" content={siteMetadata.companyName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteMetadata.siteLogoSquare} />
            <meta property="og:url" content={canonicalUrl} />
            {children}
        </Head>
    )
}

export default HeadSeo