import gsap from "gsap";
import { useEffect } from "react";
import { useStatePageTransitionContext } from "../../contexts/TransitionPageProvider";
import "../../styles/contact.css"


function PresentationContact() {

  const stateTransition = useStatePageTransitionContext() 
  
  let transitionPresentCtx = gsap.context((self)=>{
    self.add("show",()=>{
      let lt = gsap.timeline()
      lt.fromTo(".contact-present-cont",{
        opacity:0,
        x:-70,
      },{
        duration:1.2,
        ease:"power2.out",
        opacity:1,
        x:0,
        delay:.4
      })
    })
  })
  
  useEffect(()=>{
    return ()=>transitionPresentCtx.revert()
  },[])

  useEffect(()=>{
    if(stateTransition){
      transitionPresentCtx.show()
    }
  },[stateTransition])


  return (
    <div className="contact-present topPage-section" id="contact">
        <section className="sct-standar contact-present-cont">
          <h1>Contact</h1>
          <h3>Lorem ipsum dolor sit amet</h3>
          <span>By Me</span>
        </section>
        <img className="contact-present-background" src="./assets/contact.jpg"></img>
    </div>
  );
}

export default PresentationContact;