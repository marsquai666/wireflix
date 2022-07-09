import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { fetchActionMovies } from '../utils/tmdb-api'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-gray-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - Wireflix</title>
      </Head>
      {/* Header */}
      <Header />
      <main> 
        <Banner />
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  )
}

export default Home
