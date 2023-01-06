import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Value() {
   
  useEffect(()=>{
    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-value-cont",
          start:"center bottom",
          end:"center bottom"
        }
      })
      tl.fromTo(".about-value-title",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
      })

      tl.fromTo(".about-value-name",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:1,
        ease:"power4.out"
      },"-=1")

      let listItem = gsap.utils.toArray(".about-value-list-item"); 
      listItem.forEach((item,id)=>{
        gsap.fromTo(item,{
          x:-120,
          opacity:0
        },{
          scrollTrigger:{
            trigger:item,
            start:"-200px center",
            end:"center bottom"
          },
          opacity:1,
          x:0,
          duration:1.1,
          ease:"power4.out"
        })
      })

    })
    return ()=>transitionCtx.revert()
  },[])

  return (
    <section className="sct-standar about-section about-value">
        <div className="sct-standar-name about-value-name">
          <h4>Value</h4>
        </div>
        <div className="about-value-cont">
          <div className="about-value-title">
            <h2>We Build Value.</h2>
            <p>Lorem ipsum dolor <span>sit amet</span></p>
          </div>
          <div className="about-value-list">
            <ul className="about-value-list-cont">
              <li className="about-value-list-item">
                <div className="about-value-list-item-num">01</div>
                <div className="about-value-list-item-info">
                  <h4>Stay Low Key</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </li>
              <li className="about-value-list-item">
                <div className="about-value-list-item-num">01</div>
                <div className="about-value-list-item-info">
                  <h4>Stay Low Key</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </li>
              <li className="about-value-list-item">
                <div className="about-value-list-item-num">01</div>
                <div className="about-value-list-item-info">
                  <h4>Stay Low Key</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </li>
              <li className="about-value-list-item">
                <div className="about-value-list-item-num">01</div>
                <div className="about-value-list-item-info">
                  <h4>Stay Low Key</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </li>
              <li className="about-value-list-item">
                <div className="about-value-list-item-num">01</div>
                <div className="about-value-list-item-info">
                  <h4>Stay Low Key</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
}

export default Value;