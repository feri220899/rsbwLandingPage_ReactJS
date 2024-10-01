import React from 'react'
import Layout from '../../Layout/Layout'
import Carousel from './component/Carousel'


function Home() {
  
  return (
    <Layout>
      <Carousel/>
      <div className="hero h-screen bg-slate-400" name='section2'>
        <h1 className="text-5xl font-bold">section2 now!</h1>
      </div>
      <div className="hero h-screen bg-black" name='section3'>
        <h1 className="text-5xl font-bold">section3 now!</h1>
      </div>
    </Layout>
  )
}

export default Home