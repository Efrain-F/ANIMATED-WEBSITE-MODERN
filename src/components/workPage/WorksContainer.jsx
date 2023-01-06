import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";

import WorkCard from "./WorkCard";
import { useActionsPageTransitionContext } from "../../contexts/TransitionPageProvider";

import FilterWorks from "./FilterWorks";

function WorksContainer() {
  const {showTransitionPage} = useActionsPageTransitionContext()
  const {categ} = useParams()
  const [worksRender,setWorksRender] = useState([]) // trabajos que se renderizaran
  const [worksFilter,setWorksFilter] = useState([]) // trabajos filtrados (en fase antes de renderizar)
  const [numSections,setNumSections] = useState(0) // numero de secciones (para la paginacion)
  
  const [focusWork,setfocusWork] = useState(0)

  const maxWorksInPage = 10
  const allListWorks = [
    {
      img:"work1.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work2.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work3.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work4.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work5.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work6.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work7.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work1"
    },
    {
      img:"work8.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work9.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work10.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work11.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work12.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work13.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work14.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work15.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
    {
      img:"work16.jpg",
      date:"Works on 01 Ene 2023",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      lem:"Lorem ipsum dolor sit",
      filter:"work2"
    },
  ]

  function divideBySections(works){
    let allWorks = [...works]
    let chunks = []
    // division de secciones dependiendo del numero de works
    let numSection = Math.floor(allWorks.length/maxWorksInPage)
    let remainder = allWorks.length%maxWorksInPage
    remainder!=0 && numSection++
    setNumSections(numSection)
    for (let i = 0; i < numSection; i++) {
      chunks.push(allWorks.slice(i * maxWorksInPage, (i + 1) * maxWorksInPage));
    }
    setWorksRender(chunks)
  }

  useEffect(()=>{
    worksFilter.length!=0&&divideBySections(worksFilter)
  },[worksFilter])

  useEffect(()=>{
    setfocusWork(0)
    if(categ){
      let allListWorksFilter = allListWorks.filter(work=>work.filter == categ)
      // en caso de que el filtro no retorna (un error), se renderiza toda la lista
      allListWorksFilter.length != 0?setWorksFilter(allListWorksFilter):setWorksFilter(allListWorks)
    }else{setWorksFilter(allListWorks)}
  },[categ])

  function FocusSectionWorks(num){
    if(num!=focusWork){
      // en el componente (page work) quita la transicion automaticamente
      showTransitionPage(()=>{setfocusWork(num)})
    }
  }
  // a > b && :)
  function PrevWorks(){
    if(focusWork > 0){
      FocusSectionWorks(focusWork-1)
    }
  }
  function NextWorks(){
    if(focusWork < numSections-1){
      FocusSectionWorks(focusWork+1)
    }
  }


  useEffect(()=>{
    const cards = gsap.utils.toArray(".workCard")
    cards.forEach(card=>{
      gsap.fromTo(card,{
        opacity:0,
        y:"10%"
      },{
        scrollTrigger:{
          trigger:card,
          start:"top center",
          end:"bottom bottom",
        },
        opacity:1,
        y:0
      })
    })
  },[worksRender])

  return (
    <>
      <FilterWorks categ={categ}/>
      <section className="sct-standar worksCont">
        <ul className="worksCont-grid">
          {worksRender.length&&worksRender[focusWork].map((work,id)=><WorkCard key={id} myId={id} work={work}/>)}
        </ul>
        <div className="worksCont-control">
          <span onClick={PrevWorks}>PREV</span>
          <div className="worksCont-control-pages">
            {Array.from({length: numSections}, (_, i) => i ).map((num,id)=><span className={num==focusWork?"worksCont-control-pages-focus":""} key={id} onClick={()=>FocusSectionWorks(num)}>{num+1}</span>)}
          </div>
          <span onClick={NextWorks}>NEXT</span>
        </div>
      </section>
    </>
  );
}

export default WorksContainer;