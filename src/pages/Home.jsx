import { useState } from "react"
import Slider from "../utility/Slider"

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
    </>
  )
}

export default Home