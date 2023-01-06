import { useEffect } from "react"
import { useState } from "react"
import "./../styles/service.css"
import "./../styles/home.css"

import { useActionsPageTransitionContext, useStatePageTransitionContext} from "../contexts/TransitionPageProvider"

import Presentation from "../components/ServicePage/Presentation"
import Introduction from "../components/ServicePage/Introduction"
import JobAdvertising from "../components/ServicePage/JobAdvertising"
import Consulting from "../components/ServicePage/Consulting"
import CreativeSupport from "../components/ServicePage/CreativeSupport"
import Partners from "../components/ServicePage/Partners"
import Appealing from "../components/ServicePage/Appealing"
import Contact from "../components/ServicePage/Contact"
import SolutionMain from "../components/ServicePage/SolutionMain"


function Service() {
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
    <section className="sectionRoute service">
      <Presentation/>
      <Introduction/>
      <SolutionMain/>
      <JobAdvertising/>
      <Partners/>
      <Consulting/>
      <CreativeSupport/>
      <Appealing/>
      <Contact></Contact>
    </section>
    
  );
}

export default Service;