import { useEffect } from "react"
import gsap from "gsap"
function Consulting() {



  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      
      let durationTr = 1.2
      gsap.fromTo(".consulting-left",{
        y:-60,
        opacity:0
      },{
        scrollTrigger:{
          trigger:".consulting-left",
          start:"20% center",
          end:"center bottom"
        },
        y:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      gsap.fromTo(".consulting-right-txt",{
        x:"20%",
        opacity:0
      },{
        scrollTrigger:{
          trigger:".consulting-right",
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
    <section className="section-img-ts consulting">
      <div className="jobAdvert-left consulting-left jobAdvert-section">
        <div className="section-left-text consulting-txt">
          <h3>02</h3>
          <h4>Consulting</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <img src="./assets/service-job-3.jpg" className="service-img" alt="" />
      </div>
      <div className="jobAdvert-right consulting-right  jobAdvert-section">
        <div className="sct-standar consulting-right-txt section-right-text">
          <div className="sct-standar-name">
            <h4>CONSULTING</h4>
          </div>
          <main className=" jobAdvert-right-text-cont">
            <div className=" section-right-text-cont-title">
              <h3>Lorem ipsum, dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem neque atque recusandae, blanditiis distinctio veritatis, facere rem deleniti quidem impedit quasi possimus repellat, delectus aliquid tempora libero rerum ipsum.</p>
            </div>
            <ul className=" consulting-right-text-cont-estd">
              <li className=" consulting-right-text-cont-estd-item">
                <h3>01</h3>
                <h4>Lorem ipsum dolor sit amet</h4>
              </li>
              <li className=" consulting-right-text-cont-estd-item">
                <h3>02</h3>
                <h4>Lorem ipsum dolor sit amet</h4>
              </li>
              <li className=" consulting-right-text-cont-estd-item">
                <h3>03</h3>
                <h4>Lorem ipsum dolor sit amet</h4>
              </li>
              
            </ul>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Consulting;