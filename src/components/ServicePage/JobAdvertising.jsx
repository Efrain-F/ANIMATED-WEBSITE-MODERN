import { useEffect } from "react";
import gsap from "gsap";

function JobAdvertising() {


  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      
      let durationTr = 1.2
      gsap.fromTo(".jobAdvert-left-anim",{
        y:-60,
        opacity:0
      },{
        scrollTrigger:{
          trigger:".jobAdvert-left-anim",
          start:"20% center",
          end:"center bottom",
        },
        y:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      gsap.fromTo(".jobAdvert-right-text",{
        x:"20%",
        opacity:0
      },{
        scrollTrigger:{
          trigger:".jobAdvert-right-anim",
          start:"20% center",
          end:"center bottom",
        },
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1")
      
    })
    return()=>transitionCtx.revert()
  },[])

  return (
    <section className="jobAdvert section-img-ts">
      <div className="jobAdvert-left jobAdvert-left-anim jobAdvert-section">
        <div className="jobAdvert-left-text section-left-text ">
          <h3>01</h3>
          <h4>Job Advertising</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <img src="/ANIMATED-WEBSITE-MODERN/imgs/service-job-2.jpg" className="service-img" alt="" />
      </div>
      <div className="jobAdvert-right jobAdvert-right-anim jobAdvert-section">
        <div className="sct-standar jobAdvert-right-text section-right-text">

          <div className="sct-standar-name">
            <h4>JOB ADVERTISING</h4>
          </div>
          <main className=" jobAdvert-right-text-cont">
            <div className="section-right-text-cont-title jobAdvert-right-text-cont-title">
              <h3>Lorem ipsum, dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem neque atque recusandae, blanditiis distinctio veritatis, facere rem deleniti quidem impedit quasi possimus repellat, delectus aliquid tempora libero rerum ipsum.</p>
            </div>
            <ul className=" jobAdvert-right-text-cont-estd">
              <li className=" jobAdvert-right-text-cont-estd-item">
                <h3>lorem</h3>
                <h4>100 <span>million</span></h4>
              </li>
              <li className=" jobAdvert-right-text-cont-estd-item">
                <h3>lorem</h3>
                <h4>100 <span>%</span></h4>
              </li>
              <li className=" jobAdvert-right-text-cont-estd-item">
                <h3>lorem</h3>
                <h4>100 <span>%</span></h4>
              </li>
              
            </ul>
          </main>
          
        </div>

      </div>
    </section>
  );
}

export default JobAdvertising;