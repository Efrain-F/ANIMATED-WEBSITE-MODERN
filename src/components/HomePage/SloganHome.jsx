import gsap from "gsap";
import { useEffect } from "react";

function SloganHome() {

  useEffect(()=>{

    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".sloganHome-main",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl.fromTo(".sloganHome-name",{
        x:-100,
        opacity:0,
      },{
        opacity:1.2,
        duration:1,
        x:0,
        ease:"power4.out",

      })
      tl.fromTo(".sloganHome-main",{
        x:-130,
        opacity:0,
      },{
        duration:1.2,
        opacity:1,
        ease:"power4.out",
        x:0
      },"-=.9")
    })

    return()=>animation.revert()
  },[])

  return (
    <section className="sct-standar sloganHome home-slogan">
      <div className="sct-standar-name sloganHome-name">
        <h4>OUR SLOGAN</h4>
      </div>
      <main className="sloganHome-main">
        <div className="sloganHome-main-title">
          <h2>STAY LOW KEY</h2>
          <h3>Stay focused on the end goal until you succeed.</h3>
        </div> 
        <div className="sloganHome-main-txt">
          <h4>Lorem ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident ullam fugit laudantium nemo, eaque optio commodi quaerat praesentium itaque ipsam at ducimus, porro labore perferendis. Itaque doloribus voluptatem tempore!</p>
        </div> 
      </main>
    </section>
  );
}

export default SloganHome;