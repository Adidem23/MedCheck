import NavbarWeb from '../Components/Pages/Navbar'
import { SparklesPreview } from '../Components/Pages/SparklesPreview'
import FirstCards from '../Components/Pages/FirstCards'
import SwiperR from '../Components/Pages/SwiperR'
import { BentoGridDemo } from '../Components/Pages/BentoGridDemo'
import Features from '../Components/Pages/Features'
import Timeline from '../Components/Pages/TimeLine'
import TimeLineTop from '../Components/Pages/TimeLineTop'
import { GlobeDemo } from '../Components/Pages/GlobeDemo'
import Contact from '../Components/Pages/Contact'
import { FooterLinks } from '../Components/Pages/Footer'

const Main = () => {
  return (
    <>
      <NavbarWeb />
      <SparklesPreview />
      <FirstCards />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SwiperR />
      <br />
      <Features />
      <br />
      <TimeLineTop />
      <Timeline />
      <br />
      <BentoGridDemo />
      <div className='flex flex-row'>
      <Contact />
      <GlobeDemo />
      </div>
      <FooterLinks />
    </>
  )
}

export default Main