import { useEffect } from "react"
import gsap from "gsap"


function Partners() {
  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".partners",
          start:"center bottom",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".partners-title",{
        y:-60,
        opacity:0
      },{
        y:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      

      let listItem = gsap.utils.toArray(".partners-grid-itm"); 
      listItem.forEach((item,id)=>{
        gsap.fromTo(item,{
          y:-30,
          opacity:0
        },{
          scrollTrigger:{
            trigger:item,
            start:"-100px center",
            end:"center bottom"
          },
          opacity:1,
          y:0,
          duration:1.2,
          ease:"power4.out"
        })
      })

    })
    return()=>transitionCtx.revert()
  },[])
  return (
    <div className="partners">
      <section className="sct-standar">
        <main className="partners-main">
          <div className="partners-title">
            <h3>Job Advertising Partners</h3>
            <h4>Lorem ipsum</h4>
          </div>
          <div className="partners-cont">
            <ul className="partners-grid">
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
              <li className="partners-grid-itm">Company</li>
            </ul>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Partners;