import Navbar from "components/Navbar"
import { useState,useEffect } from "react"
import TabTitle from '../components/TabTitle'
import FlexColumns from '../components/FlexColumns'

const Home = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [ifMobile, setIfMobile] = useState(false)

  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=>{
      window.removeEventListener('resize', checkSize)
    }
  })

  const checkSize = () =>{
    setSize(window.innerWidth)
    if (size < 768){
      setIfMobile(true)
    }
    else{
      setIfMobile(false)
    }
  }
  
  return (
    <div className="overflow-x-hidden">
      <TabTitle title ='Franklin Study Group'/>
      <div>
        <Navbar />
        {!ifMobile && <FlexColumns columns={['home', 'subjects', 'members']} start={60} />}
        <img id="home" src="/Images/study.jpeg" className="w-full"/>
        {/* <p className='relative text-center bg-fuchsia-400 bottom-96'>Study Buddies: Find a Tutor</p> */}
        <div style={{borderLeft: `${size}px solid transparent`, borderRight: '0px solid transparent', borderBottom: '50px solid #fff', position: 'relative', bottom:'50px', transform: 'scaleX(-1)'}} />

      </div>
    </div>
  )
}

export default Home
