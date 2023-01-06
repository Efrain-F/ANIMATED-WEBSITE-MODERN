import { useEffect } from "react"
import gsap from "gsap"

function PartnerHome() {


  useEffect(()=>{
    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".partnersHome-main",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl.fromTo(".partnersHome-title",{
        x:-200,
        opacity:0,
      },{
        opacity:1,
        duration:1.2,
        x:0,
        ease:"power4.out",

      })
      let partner = gsap.utils.toArray(".partnersHome-grid-itm")
      partner.forEach((par)=>{
        gsap.fromTo(par,{
          opacity:0,
          y:-80
        },{
          scrollTrigger:{
            trigger:par,
            start:"top center",
            end:"bottom bottom",
          },
          opacity:1,
          y:0
        })
      })
    })

    return()=>animation.revert()
  },[])


  return (
    <div className="partnersHome">
      <section className="sct-standar">
        <main className="partnersHome-main">
          <div className="partnersHome-title">
            <h3 className="nameSectionHomeMin">4. JOB ADVERTISING PARTNER</h3>
          </div>
          <div className="partnersHome-cont">
            <ul className="partnersHome-grid">
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
              <li className="partnersHome-grid-itm">Company</li>
            </ul>
          </div>
        </main>
      </section>
    </div>
  );
}

export default PartnerHome;