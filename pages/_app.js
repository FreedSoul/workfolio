import '../styles/globals.css'
import '../styles/design_tokens.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default MyApp
