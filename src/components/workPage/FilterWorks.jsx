import gsap from 'gsap';
import { MdOutlineExpandMore } from 'react-icons/md';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function FilterWorks({categ}) {
  const [showFilters,setShowFilters] = useState(false)

  const [textFilter,setTextFilter] = useState("All")

  const animationFilter = gsap.context((self)=>{
    self.add("show",()=>{
      gsap.fromTo(".filterWorks-opts",{
        height:0,
      },{
        height:250,
      })
    })
    self.add("hidden",()=>{
      gsap.fromTo(".filterWorks-opts",{
        height:250,
      },{
        height:0,
      })
    })
  })
  useEffect(()=>{
    return()=>{
      animationFilter.revert()
    }
  },[])
  function showOrHidd(){
    showFilters? animationFilter.hidden():animationFilter.show()    
    setShowFilters(!showFilters)
  }

  useEffect(()=>{
    switch(categ){
      case "work1":
        setTextFilter("Work 1")
        break;
      case "work2":
        setTextFilter("Work 2")
        break;
      default:
        setTextFilter("All")
    }
  },[categ])
  

  return (
    <section className="sct-standar filterWorks">
      <div className="filterWorks-selct filterWorks-line" onClick={showOrHidd}>
        <h5><span>Filter: </span>{textFilter}</h5>
        <MdOutlineExpandMore className='filterWorks-more-icon' />
      </div>
      <ul className="filterWorks-opts">
        <li className={`filterWorks-line ${categ==undefined?"filterWorkLineFocus":""}`}>
          <Link to="/works">All</Link>
        </li>
        <li className={`filterWorks-line ${categ=="work1"?"filterWorkLineFocus":""}`}>
          <Link to="/works/category/work1">Works 1</Link>
        </li>
        <li className={`filterWorks-line ${categ=="work2"?"filterWorkLineFocus":""}`}>
          <Link to="/works/category/work2">Works 2</Link>
        </li>
      </ul>
    </section>
  );
}

export default FilterWorks;