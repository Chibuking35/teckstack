import Slider from "@/component/Slider"
import { Slides } from "@/lib/Slide"
import Image from "next/image"

const Home = () => {

  return (

    <div className="p-2">
     
  <Slider slides={Slides}/>
    </div>
  )
}

export default Home
