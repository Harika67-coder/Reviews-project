
import React from 'react'
import Person from './Person'
const List = ({Reviews}) => {
  return Reviews.map((review)=>{
  return <Person key={review.id} {...review}/>
})
}

export default List
