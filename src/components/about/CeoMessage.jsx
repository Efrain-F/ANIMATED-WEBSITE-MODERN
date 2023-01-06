import gsap from "gsap";
import { useEffect } from "react";

function CeoMessage() {
  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-ceo",
          start:"20% center",
          end:"center bottom"
        },
        delay:.2
      })
      tl.fromTo(".about-ceo-photo",{
        x:-200,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1.2,
        ease:"power2.out"
      })
      tl.fromTo(".about-ceo-message",{
        x:100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1.2,
        ease:"power3.out"
      },"-=1")

      tl.fromTo(".about-ceo-name",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1,
        ease:"power4.out"
      },"-=1")
    })
    return ()=>transitionCtx.revert()
  },[])

  return (
    <div className="abaout-ceo-cent">
      <section className="sct-standar about-section about-ceo">
        <div className="sct-standar-name about-ceo-name">
          <h4>CEO MESSAGE</h4>
        </div>
        <div className="about-ceo-cont">
          <div className="about-ceo-photo">
            <img src="./assets/ceoPhoto.jpg" alt="" />
          </div>
          <main className="about-ceo-message">
            <h2>Just Choose Kind</h2>
            <h4>Ceo <span>Lorem ipsum</span></h4>

            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel laborum quo iusto laudantium vitae debitis ea at, doloribus iure ipsam temporibus excepturi placeat numquam veniam atque! Voluptas doloribus adipisci laborum.</p>
          </main>
        </div>

      </section>
    </div>
  );
}

export default CeoMessage;