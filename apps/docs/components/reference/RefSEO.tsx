import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

function RefSEO({ title }) {
  const router = useRouter()

  const path = router.asPath.replace('crawlers/', '')

  return (
    <NextSeo
      title={title}
      openGraph={{
        title,
        url: `https://dev.dijets.io/docs${path}`,
        images: [
          {
            url: `https://whitelist.dijets.io/og-dijets-docs.png`,
          },
        ],
      }}
    />
  )
}

export default RefSEO
