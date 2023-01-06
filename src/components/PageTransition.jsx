import { useEffect } from "react";
import { IoLogoFirefox } from 'react-icons/io5';

import "./../styles/pageTransition.css"

function PageTransition() {
  useEffect(()=>{
  },[])
  return (
    <div className="app-pageTransition">
      <div className="app-pageTransition-effect"></div>
      <IoLogoFirefox className="app-pageTransition-logo"/>
    </div>
  );
}

export default PageTransition;