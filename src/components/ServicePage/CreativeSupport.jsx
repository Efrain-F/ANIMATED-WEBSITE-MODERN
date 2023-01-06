
import { useEffect } from "react";
import gsap from "gsap";


function CreativeSupport() {

  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      
      let durationTr = 1.2
      gsap.fromTo(".creative-left",{
        y:-60,
        opacity:0
      },{
        scrollTrigger:{
          trigger:".creative-left",
          start:"20% center",
          end:"center bottom"
        },
        y:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      gsap.fromTo(".creative-right",{
        x:"10%",
        opacity:0
      },{
        scrollTrigger:{
          trigger:".creative-right",
          start:"20% center",
          end:"center bottom"
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
    <section className="section-img-ts creative">
      <div className="jobAdvert-left creative-left jobAdvert-section">
        <div className="section-left-text creative-left">
          <h3>03</h3>
          <h4>Createive Support</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <img src="./assets/service-job-4.jpg" className="service-img" alt="" />
      </div>
      <div className="jobAdvert-right jobAdvert-section">
        <div className="sct-standar creative-right section-right-text">

          <div className="sct-standar-name">
            <h4>CREATIVE SUPPORT</h4>
          </div>
          <main className=" jobAdvert-right-text-cont">
            <div className=" section-right-text-cont-title">
              <h3>Lorem ipsum, dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem neque atque recusandae, blanditiis distinctio veritatis, facere rem deleniti quidem impedit quasi possimus repellat, delectus aliquid tempora libero rerum ipsum.</p>
            </div>
            <ul className=" creativeSupp-right-text-cont-estd">
              <li className=" creativeSupp-right-text-cont-estd-item">
                <h3>01</h3>
                <div className=" creativeSupp-right-text-cont-estd-item-div">
                  <h4>Lorem</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem, </p>

                </div>
              </li>
              <li className=" creativeSupp-right-text-cont-estd-item">
                <h3>01</h3>
                <div className=" creativeSupp-right-text-cont-estd-item-div">
                  <h4>Lorem</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem,</p>

                </div>
              </li>
              <li className=" creativeSupp-right-text-cont-estd-item">
                <h3>01</h3>
                <div className=" creativeSupp-right-text-cont-estd-item-div">
                  <h4>Lorem</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem, rerum fuga porro aut libero magni mollitia</p>

                </div>
              </li>
              
            </ul>
          </main>
          
        </div>
      </div>
    </section>
  );
}

export default CreativeSupport;