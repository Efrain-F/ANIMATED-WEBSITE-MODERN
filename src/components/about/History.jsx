import gsap from "gsap";
import { useEffect } from "react";

function History() {

  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-history",
          start:"-10% center",
          end:"center bottom",
        }
      })

      tl.fromTo(".about-history-name",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1,
        ease:"power4.out"
      })

      let listItem = gsap.utils.toArray(".about-section-linetime-time"); 
      listItem.forEach((item,id)=>{
        gsap.fromTo(item,{
          y:-80,
          opacity:0
        },{
          scrollTrigger:{
            trigger:item,
            start:"-200px center",
            end:"center bottom",
          },
          opacity:1,
          y:0,
          duration:1.1,
          ease:"power4.out"
        })
      })

    })
    return ()=>transitionCtx.revert()
  },[])


  return (
    <div className="about-history-background">
      <section className=" about-section sct-standar about-history">
        <div className="sct-standar-name about-history-name">
          <h4>HISTORY</h4>
        </div>
        <main className="about-section-cont">
          <ul className="about-section-linetime">
            <li className="about-section-linetime-time">
              <div className="about-section-linetime-time-year"><h5>2011</h5></div>
              <div className="about-section-linetime-time-inf">
                <div className="about-section-linetime-time-inf-lim">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem corrupti minus amet qui laudantium dignissimos sunt explicabo culpa. Odit culpa, fuga molestiae doloremque debitis quas est ipsa eaque! Accusamus?</p>
                </div>
              </div>
            </li>
            <li className="about-section-linetime-time">
              <div className="about-section-linetime-time-year"><h5>2011</h5></div>
              <div className="about-section-linetime-time-inf">
                <div className="about-section-linetime-time-inf-lim">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem corrupti minus amet qui laudantium dignissimos sunt explicabo culpa. Odit culpa, fuga molestiae doloremque debitis quas est ipsa eaque! Accusamus?</p>
                </div>
              </div>
            </li>
            <li className="about-section-linetime-time">
              <div className="about-section-linetime-time-year"><h5>2011</h5></div>
              <div className="about-section-linetime-time-inf">
                <div className="about-section-linetime-time-inf-lim">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem corrupti minus amet qui laudantium dignissimos sunt explicabo culpa. Odit culpa, fuga molestiae doloremque debitis quas est ipsa eaque! Accusamus?</p>
                </div>
              </div>
            </li>
            <li className="about-section-linetime-time">
              <div className="about-section-linetime-time-year"><h5>2011</h5></div>
              <div className="about-section-linetime-time-inf">
                <div className="about-section-linetime-time-inf-lim">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem corrupti minus amet qui laudantium dignissimos sunt explicabo culpa. Odit culpa, fuga molestiae doloremque debitis quas est ipsa eaque! Accusamus?</p>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </section>
    </div>
  );
}

export default History;