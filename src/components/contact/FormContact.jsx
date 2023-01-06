import { useEffect } from "react";
import gsap from "gsap";


function FormContact() {

  let effectHover = gsap.context((self)=>{
    self.add("onHover",()=>{
      let tl = gsap.timeline()
      tl.fromTo(".contact-form-cont-submit-efct",{
        x:"-100%",
        opacity:1,
        width:"100%"
      },{
        x:"100%",
        ease: "power4.out",
        duration:.8,
      })
    })
  })

  useEffect(()=>{
    let animations = gsap.context(()=>{
      let listItem = gsap.utils.toArray(".contact-form-cont-sct"); 
      listItem.forEach((item,id)=>{
        gsap.fromTo(item,{
          x:-100,
          opacity:0
        },{
          scrollTrigger:{
            trigger:item,
            start:"-260px center",
            end:"center bottom",
          },
          opacity:1,
          x:0,
          duration:1.1,
          ease:"power4.out"
        })
      })
      gsap.fromTo(".contact-form-cont-submit",{
        x:-100,
        opacity:0
      },{
        scrollTrigger:{
          trigger:".contact-form-cont-submit",
          start:"-300px center",
          end:"center bottom"
        },
        opacity:1,
        x:0,
        duration:1.1,
        ease:"power4.out"
      })
      
    })

    return()=>{
      effectHover.revert()
      animations.revert()}
  },[])

  function submit(e){
    e.preventDefault()
  }
  function hoverEffect(){
    effectHover.onHover()
  }

  return (
    <section className="sct-standar contact-form">
      <form action="#" className="contact-form-cont">
        <div className="contact-form-cont-sct">
          <h3>Category</h3>
          <select className="contact-form-cont-sct-select" name="category">
            <option value="lorem">Lorem ipsum</option>
            <option value="lorem">Lorem ipsum</option>
            <option value="lorem">Lorem ipsum</option>
            <option value="lorem">Lorem ipsum</option>
            <option value="lorem">Lorem ipsum</option>
          </select>
        </div>
        <div className="contact-form-cont-sct">
          <h3>Name</h3>
          <div className="contact-form-cont-sct-inputs">
            <input type="text" placeholder="lorem ipsum"/>
            <input type="text" placeholder="lorem ipsum"/>
          </div>
        </div>
        <div className="contact-form-cont-sct">
          <h3>Company Name</h3>
          <div className="contact-form-cont-sct-inputs">
            <input type="text" placeholder="lorem ipsum"/>
          </div>
        </div>
        <div className="contact-form-cont-sct">
          <h3>Info</h3>
          <div className="contact-form-cont-sct-inputs">
            <input type="text" placeholder="lorem ipsum"/>
            <input type="text" placeholder="lorem ipsum"/>
          </div>
        </div>
        <div className="contact-form-cont-sct">
          <h3>Your Message</h3>
          <div className="contact-form-cont-sct-inputs">
            <textarea placeholder="Lorem ipsum dolor sit amet" name="" rows="10" id=""></textarea>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="contact-form-cont-submit">
          <div className="contact-form-cont-submit-btn">
            <div  className="contact-form-cont-submit-efct">
              <span className="contact-form-cont-submit-efct-f"></span>
            </div>
            <button type="submit" className="btn-contact-submit" onMouseEnter={hoverEffect} onClick={submit}>SEND</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default FormContact;