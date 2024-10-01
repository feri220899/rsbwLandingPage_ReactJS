
import Layout from '../../Layout/Layout'
import Carousel from './component/Carousel'
import Insurance from './component/Insurance'



function Home() {
  

  return (
    <Layout>
      <Carousel />
      <Insurance/>
      <div className="hero h-screen bg-black" name='section3'>
        <h1 className="text-5xl font-bold">section3 now!</h1>
      </div>
    </Layout>
  )
}

export default Home