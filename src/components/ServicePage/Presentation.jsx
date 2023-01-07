import gsap from "gsap";
import { useEffect } from "react";
import { useStatePageTransitionContext } from "../../contexts/TransitionPageProvider";

function Presentation() {
  const stateTransition = useStatePageTransitionContext() 
  let transitionPresentCtx = gsap.context((self)=>{
    self.add("show",()=>{
      let lt = gsap.timeline()
      lt.fromTo(".service-present-cont",{
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
    <div className="service-present topPage-section" id="service">
        <section className="sct-standar service-present-cont">
          <h1>Service</h1>
          <h3>Lorem ipsum dolor sit amet</h3>
          <span>By Me</span>
        </section>
        <img className="service-present-background" src="/ANIMATED-WEBSITE-MODERN/imgs/service.jpg"></img>
    </div>
  );
}

export default Presentation;