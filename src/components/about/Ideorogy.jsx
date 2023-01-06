import gsap from "gsap";
import { useEffect } from "react";

function Ideorogy() {



  
  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-ideologia-cont",
          start:"center bottom",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".about-ideologia-color",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      tl.fromTo(".about-ideologia-why",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"

      },"-=1")

      tl.fromTo(".about-ideologia-name",{
        x:-70,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1")
    })
    return ()=>transitionCtx.revert()
  },[])



  return (
    <section className="sct-standar about-ideologia">
        <div className="sct-standar-name about-ideologia-name">
          <h4>Ideologia</h4>
        </div>
        <main className="about-ideologia-cont">
          <header className="about-ideologia-color">
            <h2>ORANGE</h2>
            <h5>Lorem ipsum dolor sit<span> amet consectetur</span> </h5>
            <div className="about-ideologia-color-desmo">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet 
            </p>
          </header>
          <main className="about-ideologia-why">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quidem corporis officiis tempora, velit accusamus tempore quod sed eius voluptatem assumenda consectetur ad! Mollitia molestiae, beatae consequatur deserunt nulla quasi.
            </p>
          </main>
        </main>
    </section>
  );
}

export default Ideorogy;