import { useEffect } from "react";
import gsap from "gsap";

function Introduction() {

  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".service-introduction",
          start:"top center",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".service-introduction-cont",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      tl.fromTo(".service-introduction-name",{
        x:-70,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=.8")
      
    })
    return()=>transitionCtx.revert()
  },[])

  return (
    <section className="sct-standar service-introduction">
      <div className="sct-standar-name  service-introduction-name">
          <h4>INTRODUCTION</h4>
      </div>
      <main className="service-introduction-cont">
        <header className="about-ideologia-header">
          <h2>Lorem, ipsum</h2>  
        </header>
        <main className="about-introduction-text">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quidem corporis officiis tempora, velit accusamus tempore quod sed eius voluptatem assumenda consectetur ad! Mollitia molestiae, beatae consequatur deserunt nulla quasi.
          </p>
        </main>

      </main>
    </section>
  );
}

export default Introduction;