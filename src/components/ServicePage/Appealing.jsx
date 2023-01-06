import { useEffect, useState } from "react";
import gsap from "gsap";



function Appealing() {

  const limintPoint = 3
  const [point,setPoint] = useState(1)
  const [reset,setReset] = useState(true)
  const [beforePoint,setBeforePoint] = useState(point)
  

  let pointTransitionCTX = gsap.context((self)=>{

    self.add("nextPoint",(p)=>{
      gsap.fromTo(`.point-0${p}`,{
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
      gsap.fromTo(`.point-0${p}`,{
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
      gsap.to(`.point-0${p}`,{
        x:"100%",
        opacity:0,
        duration:.9,
        ease: "power4.out",
      })
    })
    self.add("hiddenBackPoint",(p)=>{
      gsap.to(`.point-0${p}`,{
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
      gsap.fromTo(".appealing-desing-graf-point",{
        opacity:0,
        y:200,
        x:0
      },{
        opacity:1,
        y:0,
        duration:.7,
        ease: "power1.out",
      })
      return()=>{
        setReset(!reset)
      }
    });


    let transitionCtx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".appealing-desing",
          start:"top center",
          end:"center bottom"
        }
      })
      let durationTr = 1.2
      tl.fromTo(".appealing-desing-title",{
        x:-100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      tl.fromTo(".appealing-desing-control",{
        x:100,
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1.1")

      
      tl.fromTo(".appealing-desing-graf",{
        x:"-10%",
        opacity:0
      },{
        x:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      },"-=1.1")

      

      const tl2 = gsap.timeline({
        scrollTrigger:{
          trigger:".order",
          start:"top center",
          end:"center bottom"
        }
      })
      tl2.fromTo(".appealing-order-title",{
        y:-40,
        opacity:0
      },{
        y:0,
        opacity:1,
        duration:durationTr,
        ease:"power4.out"
      })
      tl2.fromTo(".order-table",{
        x:80,
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
    <div className="appealing-fondo">
      <section className="sct-standar appealing">
        <article className="appealing-sct appealing-desing">
          <div className="appealing-desing-title">
            <h3>Appealing Pamphlet Design</h3>
            <h4>Lorem ipsum dolor sit</h4>
          </div>
          <main className="appealing-desing-main">
            <div className="appealing-desing-graf">
              <div className="appealing-desing-graf-point point-01">
                <div className="point">
                  <h4>Point 01</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente, vitae</p>
                </div>
              </div>
              <div className="appealing-desing-graf-point point-02">
                <div className="point">
                  <h4>Point 02</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente, vitae</p>
                </div>
              </div>
              <div className="appealing-desing-graf-point point-03">
                <div className="point">
                  <h4>Point 03</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente, vitae</p>
                </div>
              </div>
            </div>
            <div className="appealing-desing-control">
              <p>{point}/3</p>
              <div className="appealing-desing-control-pass">
                <button onClick={back}>{"<"}</button>
                <button onClick={next}>{">"}</button>
              </div>
            </div>
          </main>
        </article>
        <article className="appealing-sct order">
          <div className="appealing-order-title">
            <h3>Appealing Pamphlet Design</h3>
          </div>
          <table className="order-table">
            <tr className="order-table-tr">
              <th><div>lorem 01</div></th>
              <th><div>lorem 02</div></th>
              <th><div>lorem 03</div></th>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr className="order-table-tr">
              <td>O</td>
              <td>O</td>
              <td>O</td>
            </tr>
          </table>
        </article>
      </section>
    </div>
  );
}

export default Appealing;