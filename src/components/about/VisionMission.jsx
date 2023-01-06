import gsap from "gsap";
import { useEffect } from "react";



function VisionMission() {

  
  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tlVision = gsap.timeline({
        scrollTrigger:{
          trigger:".vision",
          start:"30% center",
          end:"center center",
        }
      })
      tlVision.fromTo(".vision-main",{
        x:-200,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
      })

      tlVision.fromTo(".about-vision-name",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1,
        ease:"power4.out"
      },"-=1")

      const tlMission = gsap.timeline({
        scrollTrigger:{
          trigger:".mission",
          start:"30% center",
          end:"center center",
        }
      })
      tlMission.fromTo(".mission-main",{
        x:200,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
      })

      tlMission.fromTo(".about-mission-name",{
        x:100,
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
    <div className="visionMission">
        <div className="visMiss-div vision">
          <section className=" about-section sct-standar visionMission-section">
            <div className="sct-standar-name about-vision-name">
              <h4>VISION</h4>
            </div>
            <main className="vision-main visionMission-main">
              <h2>Anyone Can Be a HERO.</h2>
              <h4>There is no supporting role.</h4>
              <h3>Lorem ipsum dolor sit, amet </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor iste earum minima! Natus deleniti fugit aspernatur</p>
            </main>
          </section>
        </div>
        <div className="visMiss-div mission">
          <section className=" about-section sct-standar visionMission-section">
            <div className="sct-standar-name about-mission-name">
              <h4>MISSION</h4>
            </div>
            <main className="mission-main visionMission-main">
              <h2>Be Your Own HERO.</h2>
              <h4>There is no supporting role.</h4>
              <h3>Lorem ipsum dolor sit, amet </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor iste earum minima! Natus deleniti fugit aspernatur</p>
            </main>
          </section>
        </div>
    </div>
  );
}

export default VisionMission;