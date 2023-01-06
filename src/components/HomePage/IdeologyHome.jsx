import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";


function IdeologyHome() {


  useEffect(()=>{
    const animation = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:".ideologyHome",
          start:"top center",
          end:"bottom bottom"
        },
      })
      tl.fromTo(".ideologyHome-sct-img",{
        x:-200,
        opacity:0,
      },{
        opacity:1,
        duration:1.4,
        x:0,
        ease:"power4.out",

      })
      let tl2 = gsap.timeline({
        scrollTrigger:{
          trigger:".ideologyHome-sct-main",
          start:"top center",
          end:"bottom bottom",
        },
      })
      tl2.fromTo(".ideologyHome-sct-main",{
        x:100,
        opacity:0,
      },{
        duration:1.2,
        opacity:1,
        ease:"power4.out",
        x:0
      })
    })

    return()=>animation.revert()
  },[])


  return (
    <div className="ideologyHome">
      <section className="ideologyHome-sct">
        <div className="ideologyHome-sct-img">
          <img src="/assets/homeImgs/ideology.jpg" alt="" />
        </div>
        <main className="ideologyHome-sct-main">
          <h5 className="nameSectionHomeMin">1. Ideology</h5>
          <h2>ORANGE</h2>
          <h3>Lorem ipsum.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis reprehenderit exercitationem aliquid provident delectus excepturi officiis eius iusto quidem sit rem veniam beatae reiciendis voluptatibus deleniti suscipit, commodi maiores.</p>
          <div className="ideologyHome-sct-main-about">
            <Link to={"/about"}>Go to About</Link>
          </div>
        </main>
      </section>
      <div className="ideologyHome-background">
        <div className="ideologyHome-background-color"></div>
        <div className="ideologyHome-background-color"></div>
      </div>
    </div>
  );
}

export default IdeologyHome;