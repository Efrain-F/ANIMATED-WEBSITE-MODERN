import gsap from "gsap";
import { useEffect } from "react";

function Contact() {





  useEffect(()=>{

    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".service-contact",
          start:"top center",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".service-contact-main",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
    })

    return ()=>{
      transitionCtx.revert()
    }
  },[])







  return (
    <section className="service-contact">
      <main className="sct-standar service-contact-main">
        <h3>CONTACT</h3>
        <h4>Contact here!</h4>
        <p>Lorem ipsum dolor sit, amet</p>
      </main>
    </section>
  );
}

export default Contact;