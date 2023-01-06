import { useEffect, useState } from "react"
import { useActionsPageTransitionContext, useStatePageTransitionContext} from "../contexts/TransitionPageProvider"

import "./../styles/about.css"
import Presentation from "../components/about/Presentation"
import Ideorogy from "../components/about/Ideorogy"
import Value from "../components/about/Value"
import CeoMessage from "../components/about/CeoMessage"
import VisionMission from "../components/about/VisionMission"
import History from "../components/about/History"

function About() {
  const [pageComplete,setPageComplete] = useState(false)
  
  const {hiddenTransitionPage} = useActionsPageTransitionContext()
  const stateTransition = useStatePageTransitionContext() 
  
  useEffect(()=>{
    if(stateTransition && pageComplete){
      hiddenTransitionPage()
    }
  },[stateTransition,pageComplete])
  useEffect(()=>{
    setPageComplete(true)
    //window.scrollTo(0, 0)
  },[])

  return (
    <section className="sectionRoute about">
      <Presentation/>
      <Ideorogy/>
      <Value/>
      <VisionMission/>
      <CeoMessage/>
      <History/>
    </section>
  );
}

export default About;