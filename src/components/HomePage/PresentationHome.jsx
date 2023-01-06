import gsap from "gsap";
import { useEffect, useState } from "react";
import { useStatePageTransitionContext } from "../../contexts/TransitionPageProvider";

function PresentationHome() {
  const stateTransition = useStatePageTransitionContext() 
  let transitionPresentCtx = gsap.context((self)=>{
    self.add("show",()=>{
      let lt = gsap.timeline()
      lt.fromTo(".homePresent-bottom-head",{
        opacity:0,
        x:"-14%",
      },{
        duration:1.3,
        ease:"power2.out",
        opacity:1,
        x:0,
        delay:.4
      })
    })
  })

  useEffect(()=>{
    let imgs = gsap.utils.toArray(".homePresent-div-imgs-img")
    let imgsl = gsap.utils.toArray(".homePresent-div-imgs-img-l")
    
    let transitionImgs = gsap.context((self)=>{
      // animtaion fo the imgs 
      const tl = gsap.timeline({repeat:-1})
      tl.fromTo(imgs[1],{
        x:0,
        zIndex:1,
        opacity:1
      },{
        opacity:1,
        x:0,
        zIndex:1
      })
      tl.fromTo(imgs[0],{
        x:"-20%",
        zIndex:2,
        opacity:0
      },{
        ease: "power4.out",
        opacity:1,
        duration:1.4,
        delay:2,
        x:0,
      })
      tl.fromTo(imgs[1],{
        x:"-20%",
        zIndex:3,
        opacity:0
      },{
        ease: "power4.out",
        opacity:1,
        duration:1.4,
        zIndex:5,
        delay:2,
        x:0,
      })
      const tl2 = gsap.timeline({repeat:-1})
      tl2.fromTo(imgsl[1],{
        y:0,
        zIndex:1,
        opacity:1
      },{
        opacity:1,
        y:0,
        zIndex:1
      })
      tl2.fromTo(imgsl[0],{
        y:"-20%",
        zIndex:2,
        opacity:0
      },{
        ease: "power4.out",
        opacity:1,
        duration:1.4,
        delay:2,
        y:0,
      })
      tl2.fromTo(imgsl[1],{
        y:"-20%",
        zIndex:3,
        opacity:0
      },{
        ease: "power4.out",
        opacity:1,
        duration:1.4,
        zIndex:3,
        delay:2,
        y:0,
      })
    })

    return () => {
      transitionPresentCtx.revert()
      transitionImgs.revert()
    };
  },[])


  useEffect(()=>{
    if(stateTransition){
      transitionPresentCtx.show()
    }
  },[stateTransition])





  return (
    <section className="homePresent topPage-section">
      <div className="homePresent-div homePresent-top">
        <div className="homePresent-top-title">
          <span>STAY</span>
          <span>LOW</span>
          <span>KEY</span>
        </div>
        <div className="homePresent-div-imgs">
          <img className="homePresent-div-imgs-img" src="/assets/homeImgs/presHome3.jpg" alt="" />
          <img className="homePresent-div-imgs-img" src="/assets/homeImgs/presHome1.jpg" alt="" />
        </div>
      </div>
      <div className="homePresent-div homePresent-bottom">
        <div className="homePresent-div-imgs homePresent-div-imgs-d ">
          <img className="homePresent-div-imgs-img-l" src="/assets/homeImgs/presHome2.jpg" alt="" />
          <img className="homePresent-div-imgs-img-l" src="/assets/homeImgs/presHome5.jpg" alt="" />
        </div>
        <div className="homePresent-bottom-head">
          <h3>Recruitment Advertising Agency.</h3>
          <p><span>Hero</span><span>Job</span></p>
        </div>
      </div>
    </section>
  );
}

export default PresentationHome;