import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";

function CareerHome() {



  useEffect(()=>{
    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".carrerHome-sct-main",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl.fromTo(".carrerHome-sct-main",{
        x:-100,
        opacity:0,
      },{
        opacity:1,
        duration:1.2,
        x:0,
        ease:"power4.out",

      })
      let tl2 = gsap.timeline({
        scrollTrigger:{
          trigger:".carrerHome-sct-img",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl2.fromTo(".carrerHome-sct-img",{
        opacity:0,
        x:200
      },{
        x:0,
        duration:1.4,
        opacity:1,
        ease:"power4.out"
      })
    })

    return()=>animation.revert()
  },[])


  return (
    <div className="carrerHome">
      <section className="carrerHome-sct">
        
        <main className="carrerHome-sct-cot carrerHome-sct-main">
          <div className="carrerHome-sct-main-cont">
            <h5 className="nameSectionHomeMin">3. CAREER</h5>
            <h2>Be your own "HERO"</h2>
            <h3>Lorem ipsum Lorem ipsum.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis reprehenderit exercitationem aliquid provident delectus </p>
            <div className="carrerHome-sct-main-about">
              <Link to={"/ANIMATED-WEBSITE-MODERN/about"}>Go to About</Link>
            </div>
          </div>
        </main>

        <div className="carrerHome-sct-cot carrerHome-sct-img">
          <img src="/ANIMATED-WEBSITE-MODERN/imgs/homeImgs/career.jpg" alt="" />
        </div>

      </section>
      <div className="carrerHome-background">
        <div className="carrerHome-background-color"></div>
        <div className="carrerHome-background-color"></div>
      </div>
    </div>
  );
}

export default CareerHome;