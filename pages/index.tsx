import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Banner */}
        {/* Section */}
       
        <section>{/* Rows */}</section>
      </main>
    </div>
  )
}

export default Home
