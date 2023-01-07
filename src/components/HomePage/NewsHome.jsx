import { useEffect } from "react"
import gsap from "gsap"

function NewsHome() {
  
  useEffect(()=>{
    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".newsHome",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl.fromTo(".newsHome-title",{
        x:-100,
        opacity:0,
      },{
        opacity:1,
        duration:1.2,
        x:0,
        ease:"power4.out",

      })
      let partner = gsap.utils.toArray(".newsHome-grid-new")
      partner.forEach((par)=>{
        gsap.fromTo(par,{
          opacity:0,
          x:50,
        },{
          scrollTrigger:{
            trigger:par,
            start:"-200 center",
            end:"bottom bottom"
          },
          x:0,
          opacity:1,
          duration:.7
        })
      })
    })

    return()=>animation.revert()
  },[])

  
  return ( 
    <div className="newsHome">
      <section className="sct-standar">
        <h3 className="nameSectionHomeMin newsHome-title">5. NEWS</h3>
        <div className="newsHome-grid">
          <div className="newsHome-grid-new">
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/new1.jpg" alt="" />
            <div className="newsHome-grid-new-txt">
              <div>
                <h3>Lorem ipsum, dolor sit</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas, ullam illum aliquam sed molestiae nam odit temporibus.</p>
                <span>Published on 01 Ene 2023</span>
              </div>
            </div>
          </div>
          <div className="newsHome-grid-new">
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/new2.jpg" alt="" />
            <div className="newsHome-grid-new-txt">
              <div>
                <h3>Lorem ipsum, dolor sit</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas, ullam illum aliquam sed molestiae nam odit temporibus. Saepe hic molestiae cum a optio! Impedit totam rerum delectus ad culpa.</p>
                <span>Published on 01 Ene 2023</span>
              </div>
            </div>
          </div>
          <div className="newsHome-grid-new">
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/new3.jpg" alt="" />
            <div className="newsHome-grid-new-txt">
              <div>
                <h3>Lorem ipsum, dolor sit</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas, ullam illum aliquam sed molestiae nam odit temporibus. Saepe hic molestiae.</p>
                <span>Published on 01 Ene 2023</span>
              </div>
            </div>
          </div>
          <div className="newsHome-grid-new">
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/new4.jpg" alt="" />
            <div className="newsHome-grid-new-txt">
              <div>
                <h3>Lorem ipsum, dolor sit</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas, ullam</p>
                <span>Published on 01 Ene 2023</span>
              </div>
            </div>
          </div>
          <div className="newsHome-grid-new">
            <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/new5.jpg" alt="" />
            <div className="newsHome-grid-new-txt">
              <div>
                <h3>Lorem ipsum, dolor sit</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas, ullam illum aliquam sed molestiae nam odit temporibus. Saepe hic molestiae cum a optio!.</p>
                <span>Published on 01 Ene 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsHome;