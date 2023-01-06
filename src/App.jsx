import "./styles/app.css"
import "./styles/index.css"
import { useEffect, useState } from "react";
// EXTERN
import { Routes, Route, useLocation,useOutlet} from "react-router-dom"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useActionsPageTransitionContext } from "./contexts/TransitionPageProvider";
// PAGES
import Home from "./pages/Home"
import About from "./pages/About";
import Service from "./pages/Service"
import Works from "./pages/Works";
import Contact from "./pages/Contact";

// COMPONENTS
import HeaderNavigation from "./components/HeaderNavigation"
import PageTransition from "./components/PageTransition"
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger)

function App() {
  // actions for page transition (transition Context)
  const {showTransitionPage,revertTransition} = useActionsPageTransitionContext()
  // cambia cada vez que el react-rauter activa el evento "cambio url"
  const location = useLocation()
  // cambia manualmente para cambiar la url 
  const [displayLocation, setDisplayLocation] = useState(location);
  const [restartNavMenu, setRestarNavMenu] = useState(false);

  // onComplete transition show 
  // se active cuando la transicion este mostrada por completo (no terminada)
  function onCompleteTransitionPage(){
    // cambiar la url a la nueva
    setDisplayLocation(location)
    // restaurar el menu a su estado base
    setRestarNavMenu(!restartNavMenu)
  }

  useEffect(()=>{
    return () => revertTransition()
  },[])
  useEffect(() => {
    //location !== displayLocation?showTransitionPage(onCompleteTransitionPage):hiddenTransitionPage()
    location !== displayLocation&&showTransitionPage(onCompleteTransitionPage)
    return()=>{
    }
  }, [location]);


  // rutas de navegacion
  const routes = [
    {path:"/",name:"Home",Component:Home},
    {path:"/about",name:"About",Component:About},
    {path:"/service",name:"Service",Component:Service},
    {path:"/works/*",name:"Works",Component:Works},
    {path:"/contact",name:"Contact",Component:Contact},
  ]

  return (
    <div className="App">
      <PageTransition/>
      <section className="app-container">
        <HeaderNavigation restart={restartNavMenu}/>

        <Routes location={displayLocation}>
          {routes.map(({name,path,Component})=>(
            <Route key={name} path={path} element={<Component/>}>
            </Route>
          ))}
        </Routes>
        
        <Footer/>
      </section>
    </div>
  )
}

export default App