import { useEffect } from "react"
import { useState } from "react"
import "../styles/home.css"
import "../styles/service.css"

import { useActionsPageTransitionContext, useStatePageTransitionContext} from "../contexts/TransitionPageProvider"

import PresentationHome from "../components/HomePage/PresentationHome"
import SloganHome from "../components/HomePage/SloganHome"
import IdeologyHome from "../components/HomePage/IdeologyHome"
import ServiceHome from "../components/HomePage/ServiceHome"
import CareerHome from "../components/HomePage/CareerHome"
import PartnerHome from "../components/HomePage/PartnerHome"
import NewsHome from "../components/HomePage/NewsHome"


function Home() {
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
  },[])


  return (
    <section className="sectionRoute home">
      <PresentationHome/>
      <SloganHome/>
      <IdeologyHome/>
      <ServiceHome/>
      <CareerHome/>
      <PartnerHome/>
      <NewsHome/>
    </section>
  );
}

export default Home;