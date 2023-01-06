import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';

import "./../styles/navigation.css"

import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useEffect, useState } from 'react';

import { IoLogoFirefox } from 'react-icons/io5';

function HeaderNavigation({restart}) {


  const [stateAnimation, setStateAnimation] = useState(false)

  let animationNavMenuCtx = gsap.context((self)=>{
    let navItemsLinks = gsap.utils.toArray(".headerNavigation-nav-contain-list-li"); 

    self.add("showNavMenu",()=>{
      let animationTl = gsap.timeline()
      animationTl.to(".headerNavigation-nav-contain",{
        x:0,
        duration:.3,
        delay:.1,
        ease:"power4.easeOut"
      })
      animationTl.to(".headerNavigation-nav-contain-compEffect",{
        x:"100%",
        duration:.3,
        ease:"power4.easeOut"
      },"-=.1")

      navItemsLinks.forEach((link,id)=>{
        animationTl.to(link,{
          opacity:1,
          y:0,
          duration:.2,
        },id==0?"-=.2":"-=.1")
      })
    })
    self.add("hiddenNavMenu",()=>{
      navItemsLinks.forEach((link,id)=>{
        gsap.to(link,{
          opacity:0,
          y:40,
          duration:.3,
        })
      })
      let animationTl = gsap.timeline()
      animationTl.to(".headerNavigation-nav-contain-compEffect",{
        x:0,
        opacity:1,
        duration:.5,
      })
      animationTl.to(".headerNavigation-nav-contain",{
        opacity:1,
        x:"-100%",
        duration:.4,
        ease:"power4.easeOut"
      },"-=.5")


    })
    self.add("hiddenNavMenuNOW",()=>{
      gsap.to(".headerNavigation-nav-contain-compEffect",{
        x:0,
        duration:.1
      })
      gsap.to(".headerNavigation-nav-contain",{
        opacity:1,
        x:"-100%",
        duration:.2
      },"-=0.1")

      navItemsLinks.forEach((link,id)=>{
        gsap.to(link,{
          opacity:0,
          y:40,
          duration:.2,
        })
      })
    })

    self.add("menuLine",()=>{
      
      gsap.to(".headerNavigation-nav-contain",{
        opacity:1,
        x:"-100%",
        duration:.2
      },"-=0.1")

      navItemsLinks.forEach((link,id)=>{
        gsap.to(link,{
          opacity:0,
          y:40,
          duration:.2,
        })
      })
    })
  })

  useEffect(()=>{
    animationNavMenuCtx.hiddenNavMenuNOW()
  },[restart])
  
  useEffect(()=>{
    return ()=>animationNavMenuCtx.revert()
  },[])

  function btnShowNavMenu(){
    animationNavMenuCtx.showNavMenu()
  }
  function btnHiddenNavMenu(){
    animationNavMenuCtx.hiddenNavMenu()

  }
  return (
    <header className="headerNavigation">
      <nav className="headerNavigation-nav">
        <h1 className="headerNavigation-nav-logo" ><IoLogoFirefox className='headerNavigation-nav-logo-icon'/></h1>
        <button onClick={btnShowNavMenu} className="headerNavigation-nav-btn headerNavigation-nav-showNavMenu">
          <RiMenu3Line className="headerNavigation-nav-showNavMenu-icon headerNavigation-nav-btn-icon"></RiMenu3Line>
        </button>
        <div className='headerNavigation-nav-contain'>
          <div className='headerNavigation-nav-contain-compEffect'></div>
          <button onClick={btnHiddenNavMenu} className='headerNavigation-nav-btn headerNavigation-nav-contain-btnClose'>
            <AiOutlineClose className='headerNavigation-nav-btn-icon' ></AiOutlineClose>
          </button>
          <ul className="headerNavigation-nav-contain-list">
            <li className="headerNavigation-nav-contain-list-li"><Link className="headerNavigation-nav-contain-list-link" to={"/"}>Home</Link></li>
            <li className="headerNavigation-nav-contain-list-li"><Link className="headerNavigation-nav-contain-list-link" to={"/about"}>About</Link></li>
            <li className="headerNavigation-nav-contain-list-li"><Link className="headerNavigation-nav-contain-list-link" to={"/works"}>Works</Link></li>
            <li className="headerNavigation-nav-contain-list-li"><Link className="headerNavigation-nav-contain-list-link" to={"/service"}>Service</Link></li>
            <li className="headerNavigation-nav-contain-list-li"><Link className="headerNavigation-nav-contain-list-link" to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNavigation;