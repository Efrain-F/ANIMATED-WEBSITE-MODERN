
import { useState,useEffect } from "react"
import gsap from "gsap"
import { GoTriangleDown } from 'react-icons/go';

function SolutionMain() {

  const limintPoint = 3
  const [point,setPoint] = useState(1)
  const [reset,setReset] = useState(true)
  const [beforePoint,setBeforePoint] = useState(point)


  let pointTransitionCTX = gsap.context((self)=>{

    self.add("nextPoint",(p)=>{
      gsap.fromTo(`.soltMain-point0${p}`,{
        x:"-100%",
        opacity:0,
        y:0
      },{
        opacity:1,
        x:0,
        duration:1,
        ease: "power3.out",
      })
    })
    self.add("backPoint",(p)=>{
      gsap.fromTo(`.soltMain-point0${p}`,{
        x:"100%",
        opacity:0,
        y:0
      },{
        opacity:1,
        x:0,
        duration:1,
        ease: "power3.out",
      })
    })
    self.add("hiddenNextPoint",(p)=>{
      gsap.to(`.soltMain-point0${p}`,{
        x:"100%",
        opacity:0,
        duration:.9,
        ease: "power4.out",
      })
    })
    self.add("hiddenBackPoint",(p)=>{
      gsap.to(`.soltMain-point0${p}`,{
        x:"-100%",
        opacity:0,
        duration:.9,
        ease: "power4.out",
      })
    })
  })

  
  useEffect(()=>{
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1000px)", () => {
      gsap.fromTo(".solutionMain-main-graf-point",{
        opacity:0,
        y:200,
        x:0
      },{
        opacity:1,
        y:0,
        duration:.7,
        ease: "power1.out",
      })
      gsap.to(".sappealing-desing-control",{
        opacity:1
      })
      return()=>{
        setReset(!reset)
      }
    });


    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".solutionMain-main",
          start:"top center",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".solutionMain-title",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      tl.fromTo(".solution-control",{
        x:100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1.1")

      
      tl.fromTo(".solutionMain-main-graf",{
        x:"-10%",
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1.1")
    })

    return ()=>{
      pointTransitionCTX.revert()
      mm.revert()
      transitionCtx.revert()
    }
  },[])



  useEffect(()=>{
    // el nuevo punto es mayor que el anterior
    if(point>beforePoint){
      pointTransitionCTX.hiddenBackPoint(beforePoint)
      pointTransitionCTX.backPoint(point)
      setBeforePoint(point)
    }
    else if(point<beforePoint){
      pointTransitionCTX.hiddenNextPoint(beforePoint)
      pointTransitionCTX.nextPoint(point)
      setBeforePoint(point)
    }else{
      pointTransitionCTX.nextPoint(point)
    }
  },[point,reset])

  function next(){
    if(point < limintPoint){
      setPoint(point+1)
    }
  }
  function back(){
    if(point > 1){
      setPoint(point-1)
    }
  }


  return (
    <div className="solutionMain">
      <section className="sct-standar">
        <div className="solutionMain-title"><h3>Action Main</h3></div>
        <main className="solutionMain-main">
          <div className="solutionMain-main-graf">
            <div className="solutionMain-main-graf-point soltMain-point01">
              <article className="solutionMain-point">
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
                <GoTriangleDown className="solutionMain-point-icon"></GoTriangleDown>
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
              </article>
            </div>

            <div className="solutionMain-main-graf-point soltMain-point02">
              <article className="solutionMain-point ">
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
                <GoTriangleDown className="solutionMain-point-icon"></GoTriangleDown>
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
              </article>
            </div>

            <div className="solutionMain-main-graf-point soltMain-point03">
              <article className="solutionMain-point ">
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
                <GoTriangleDown className="solutionMain-point-icon"></GoTriangleDown>
                <div className="solutionMain-point-pass">
                  <h5>Volumen</h5>
                  <p>Lorem, ipsum dolor</p>
                </div>
              </article>
            </div>

          </div>
          <div className="appealing-desing-control solution-control">
            <p>{point}/3</p>
            <div className="appealing-desing-control-pass">
              <button onClick={back}>{"<"}</button>
              <button onClick={next}>{">"}</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default SolutionMain;