import Head from 'next/head'

const cv = () => (
  <Head>
    <meta httpEquiv="refresh" content="0; URL=/static/cv/cv.pdf" />
  </Head>
)

cv.noLayout = true

export default cv
