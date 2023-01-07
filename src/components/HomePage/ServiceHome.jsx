import gsap from "gsap"
import { useEffect } from "react"


function ServiceHome() {


  useEffect(()=>{
    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".serviceHome",
          start:"top center",
          end:"bottom bottom",
        },
      })
      tl.fromTo(".serviceHome-name",{
        x:-100,
        opacity:0,
      },{
        opacity:1,
        duration:1.2,
        x:0,
        ease:"power4.out",

      })
      tl.fromTo(".serviceHome-services",{
        x:-200,
        opacity:0,
      },{
        opacity:1,
        duration:1.4,
        x:0,
        ease:"power4.out",
      },"-=1.1")



    })

    return()=>animation.revert()
  },[])

  return (
    <section className="serviceHome">
      <div className="sct-standar serviceHome-name">
        <h3 className="nameSectionHomeMin">2. SERVICE</h3>
      </div>
      <div className="serviceHome-services">
        <article className="serviceHome-services-sct">
          <div className="serviceHome-services-background">
            <div className="serviceHome-services-background-effc"></div>
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/service-job-2.jpg" alt="" />
          </div>
          <div className="serviceHome-services-txt">
            <h4 className="serviceHome-services-name">SERVICE DETAILS</h4>
            <main className="serviceHome-services-txt-main">
              <h3>Job advertising</h3>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum repellendus</p>
            </main>
          </div>
        </article>
        <article className="serviceHome-services-sct">
          <div className="serviceHome-services-background">
            <div className="serviceHome-services-background-effc"></div>
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/service-job-4.jpg" alt="" />
          </div>
          <div className="serviceHome-services-txt">
            <h4 className="serviceHome-services-name">SERVICE DETAILS</h4>
            <main className="serviceHome-services-txt-main">
              <h3>Consulting</h3>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum repellendus</p>
            </main>
          </div>
        </article>
        <article className="serviceHome-services-sct">
          <div className="serviceHome-services-background">
            <div className="serviceHome-services-background-effc"></div>
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/service-job-3.jpg" alt="" />
          </div>
          <div className="serviceHome-services-txt">
            <h4 className="serviceHome-services-name">SERVICE DETAILS</h4>
            <main className="serviceHome-services-txt-main">
              <h3>Creative Support</h3>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum repellendus</p>
            </main>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServiceHome;