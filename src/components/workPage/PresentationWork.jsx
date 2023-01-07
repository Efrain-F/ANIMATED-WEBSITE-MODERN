import gsap from "gsap";
import { useEffect } from "react";
import { useStatePageTransitionContext } from "../../contexts/TransitionPageProvider";
import "../../styles/works.css"

function PresentationWork() {
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
    <div className="service-present topPage-section work-presentation" id="work">
        <section className="sct-standar service-present-cont">
          <h1>Works</h1>
          <h3>Lorem ipsum dolor sit amet</h3>
          <span>By Me</span>
        </section>
        <img className="service-present-background" src="/ANIMATED-WEBSITE-MODERN/imgs/works.jpg"></img>
    </div>
  );
}

export default PresentationWork;