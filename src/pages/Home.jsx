import { useState } from "react"
import Slider from "../utility/Slider"
import Card from "../components/Card"
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { SlLoop } from "react-icons/sl";
import { PiHeadsetLight } from "react-icons/pi";
import { AiOutlineGift } from "react-icons/ai";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";


const Home = () => {
  const [index, setIndex] = useState(0)
  const [slider, setSlider] = useState({})

  const sliders = [
    {
      'id':1,
      'text':'Gorilla Glass Victus',
      'title1':'SAMSUNG GALAX S21',
      'title2':'ULTRA 5G EXCELLENT',
      'title3':'EDITION',
      'oldPrice':'479',
      'newPrice':'349',
      'img':'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_imageslider/views/img/sample-1.jpg',
    },
    {
      'id':2,
      'text':'Today Deals',
      'title1':'BUY SMARTWATCH',
      'title2':'WITH NEW',
      'title3':'ACTIVITY TRACKER',
      'oldPrice':'459',
      'newPrice':'299',
      'img':'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_imageslider/views/img/sample-2.jpg',
    }
  ]
  

  if (index === 0) {
    setTimeout(() => {
      setSlider(sliders[index])
    }, 1)

    setTimeout(() => {
      setIndex(index + 1)
    }, 0)
  }

  if (index === 1) {
    setTimeout(() => {
      setSlider(sliders[index])
    }, 5000)

    setTimeout(() => {
      setIndex(index - 1)
      // clearTimeout()
    }, 10000)
  }
  

  return (
    <>
      <Slider
        key={slider.id}
        text= {slider.text}
        title1= {slider.title1}
        title2= {slider.title2}
        title3= {slider.title3}
        oldPrice= {slider.oldPrice}
        newPrice= {slider.newPrice}
        img= {slider.img}
      />
      
      <div className="flex gap-3 md-4 w-[1170px] mx-auto mt-8">
        <Card 
          img={'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_cmsbanner1/views/img/cms-banner1.jpg'}
          title_1={'BIG DEALS'}
          title_2={'STM CHARGETREE'}
          text={'Apple Watch'}
        />
        <Card 
          img={'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_cmsbanner1/views/img/cms-banner2.jpg'}
          title_1={'TRENDING'}
          title_2={'SAMSUNG GALAXY'}
          text={'Tablets'}  
        />
        <Card 
          img={'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_cmsbanner1/views/img/cms-banner3.jpg'}
          title_1={'30% OFF ON EVERY'}
          title_2={'ANSI LUMEN'}
          text={'Projector'}  
        />
        <Card 
          img={'https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_cmsbanner1/views/img/cms-banner4.jpg'}
          title_1={'TRENDING'}
          title_2={'MAGIC KEYBOARD'}
          text={'For IPad'}  
        />
        
      </div>
      <div className="w-[1170px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        <div className="flex gap-4 border py-6 px-4 text-center">
          <LiaShippingFastSolid size="3rem" fill="#FAD505"/>
          <div>
            <h2 className="font-semibold text-sm">Easy Free Delivery</h2>
            <p className="font-light text-sm">Order on $100*</p>
          </div>
        </div>

        <div className="flex gap-4 border py-6 px-4 text-center">
          <GoShieldCheck size="3rem" fill="#FAD505"/>
          <div>
            <h2 className="font-semibold text-sm">Premium Warranty</h2>
            <p className="font-light text-sm">Up to 2 years</p>
          </div>
        </div>

        <div className="flex gap-4 border py-6 px-4 text-center">
          <SlLoop size="2.5rem" fill="#FAD505"/>
          <div>
            <h2 className="font-semibold text-sm">Easy Free Retur</h2>
            <p className="font-light text-sm">365 days return</p>
          </div>
        </div>

        <div className="flex gap-4 border py-6 px-4 text-center">
          <PiHeadsetLight size="3rem" fill="#FAD505"/>
          <div>
            <h2 className="font-semibold text-sm">24*7 Online Suport</h2>
            <p className="font-light text-sm">Premium searvice</p>
          </div>
        </div>

        <div className="flex gap-4 border py-6 px-4 text-center">
          <AiOutlineGift size="3rem" fill="#FAD505"/>
          <div>
            <h2 className="font-semibold text-sm">Best Special Gifts</h2>
            <p className="font-light text-sm">First Order</p>
          </div>
        </div>
      </div>

      <div>
        <NewProducts />
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home