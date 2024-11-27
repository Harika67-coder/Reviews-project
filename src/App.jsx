import People from "./data";
import {useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const [index,setIndex]=useState(0);
  const {name,job,image,text}=People[index];
  const prevButton=()=>{
   setIndex((index)=>
  {
    const newIndex=(index+People.length-1) % People.length;
    return newIndex;
  })
  }
  const nextButton=()=>{
   setIndex((index)=>
  {
    const newIndex=(index+1)%People.length;
    return newIndex;
  })
  }
  const randomPerson=()=>{
    let newIndex=Math.floor(Math.random()*4)
    if(index==newIndex)
    {
     newIndex=index+1;

    }
    setIndex(newIndex%People.length);
  }
  return  <main>
     <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div>
      <button className="prev-btn" onClick={prevButton}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextButton}><FaChevronRight/></button>
    </div>
    <button className="btn btn-hipster" onClick={randomPerson}>Suprise Me</button>
    </article>
  </main>
};
export default App;
