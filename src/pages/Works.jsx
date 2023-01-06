import { useEffect,useState } from "react"
import "./../styles/home.css"

import { useActionsPageTransitionContext, useStatePageTransitionContext} from "../contexts/TransitionPageProvider"

import { Route,Routes} from "react-router-dom"

import PresentationWork from "../components/workPage/PresentationWork"
import WorksContainer from "../components/workPage/WorksContainer"
import FilterWorks from "../components/workPage/FilterWorks"

import { useParams } from "react-router-dom"

function Works() {
  const [pageComplete,setPageComplete] = useState(false)
  const {hiddenTransitionPage} = useActionsPageTransitionContext()
  const stateTransition = useStatePageTransitionContext() 
  useEffect(()=>{
    if(stateTransition && pageComplete){ 
      hiddenTransitionPage()
    }
  },[stateTransition,pageComplete])
  useEffect(()=>{
    const timer = setTimeout(() => {
      setPageComplete(true)
    }, 300);

    // Esto se ejecuta cuando el componente deja de ser montado
    return () => {
      clearTimeout(timer);
    };
  },[])

  
  return (
    <section className="sectionRoute about">
      <PresentationWork/>
      <Routes>
        <Route path="/" element={<WorksContainer/>}></Route>
        <Route path="/category/:categ" element={<WorksContainer/>}></Route>
      </Routes>
    </section>
  );
}

export default Works;