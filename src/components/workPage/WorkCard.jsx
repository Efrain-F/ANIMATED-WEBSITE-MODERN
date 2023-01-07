
function WorkCard({work}) {

  return (
    <li className="workCard">
      <div className="workCard-img">
        <span className="workCard-img-effc">VIEW</span>
        <img src={"/ANIMATED-WEBSITE-MODERN/imgs/works/"+work.img}></img>
      </div>
      <div className="workCard-cont">
        <span>{work.date}</span>
        <h3>{work.text}</h3>
        <p>{work.lem}</p>
      </div>
    </li>
  );
}

export default WorkCard;