import { useEffect } from "react"
import "./../styles/home.css"
import { useState } from "react"

import { useActionsPageTransitionContext, useStatePageTransitionContext} from "../contexts/TransitionPageProvider"


import PresentationContact from "../components/contact/PresentationContact"
import FormContact from "../components/contact/FormContact"

function Contact() {
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
    <section className="sectionRoute about">
      <PresentationContact/>
      <FormContact/>
    </section>
  );
}

export default Contact;