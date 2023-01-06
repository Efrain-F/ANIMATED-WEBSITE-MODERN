import { createContext, useContext, useEffect, useState} from "react";
import gsap from "gsap";

const transitionPageContext = createContext()
const stateTransitionPageContext = createContext()

export function useActionsPageTransitionContext(){
  return useContext(transitionPageContext)
}
export function useStatePageTransitionContext(){
  return useContext(stateTransitionPageContext)
}

export function TransitionPageProvider(props){


  const [stateTransition,setStateTransition] = useState(true)
  // verdadero si esta en medio de la transicion
  const [awaitTransition,setAwaitTransition] = useState(false)

  let ctxTransition = gsap.context((self)=>{
    self.add("show",(cal)=>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      let transition = gsap.timeline({onComplete:()=>{
        cal()
        setStateTransition(true)
      }})
      transition.fromTo(".app-pageTransition",{
        x:"-100%",
        },{
        x:0,
        duration:1,
        ease:"power4.out"
      })
      transition.fromTo(".app-pageTransition-effect",{
        x:0,
        backgroundColor:"#f27300"
      },{
        x:"100%",
        ease:"power4.out",
        duration:.5
      },"-=.8")
      transition.from(".app-pageTransition-logo",{
        y:100,
        opacity:0,
        duration:.8
      },"-=.7")
    })
    self.add("hidden",()=>{
      let transition = gsap.timeline({onComplete:()=>{
        setStateTransition(false)
      }})
      transition.to(".app-pageTransition",{
        x:"100%",
        duration:1,
        ease:"power2.out",
        delay:.4
      })
    })
  })

  useEffect(()=>{
    return()=>{ctxTransition.revert()}
  },[])

  function showTransitionPage(cal){
    if(awaitTransition){

    }else{
      
    }
    ctxTransition.show(cal)
  }
  function hiddenTransitionPage(){
    ctxTransition.hidden()
  }
  function revertTransition(){
    ctxTransition.revert()
  }

  const transitionActions = {
    showTransitionPage,
    hiddenTransitionPage,
    revertTransition
  }

  return (
    <transitionPageContext.Provider value={transitionActions}>
      <stateTransitionPageContext.Provider value={stateTransition}>
        {props.children}
      </stateTransitionPageContext.Provider>
    </transitionPageContext.Provider>
  )
}






