import Head from 'next/head'

const ugp = () => (
  <Head>
    <meta httpEquiv="refresh" content="0; URL=/static/ugp/ugp.pdf" />
  </Head>
)

ugp.noLayout = true

export default ugp
