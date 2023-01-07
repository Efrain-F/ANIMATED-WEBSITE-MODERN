import gsap from "gsap";
import { useEffect } from "react";
import { useStatePageTransitionContext } from "../../contexts/TransitionPageProvider";
import { useLocation } from "react-router-dom";



function Presentation() {

  const stateTransition = useStatePageTransitionContext() 
  let transitionPresentCtx = gsap.context((self)=>{
    self.add("show",()=>{
      let lt = gsap.timeline()
      lt.fromTo(".about-present-cont",{
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
    <div className="about-present topPage-section" id="about">
        <section className="sct-standar about-present-cont">
          <h1>About</h1>
          <h3>Lorem ipsum dolor sit amet</h3>
          <span>By Me</span>
        </section>
        <img className="about-present-background" src="/ANIMATED-WEBSITE-MODERN/imgs/about.jpg"></img>
    </div>
  );
}

export default Presentation;