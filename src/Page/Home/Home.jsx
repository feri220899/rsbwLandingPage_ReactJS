
import Layout from '../../Layout/Layout'
import Carousel from './component/Carousel'
import Insurance from './component/Insurance'
import Mockup from './component/Mockup'

function Home() {


  return (
    <Layout>
      <Carousel />      
      <Mockup/>
      <Insurance />



    </Layout>
  )
}

export default Home