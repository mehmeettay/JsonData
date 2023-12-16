 import React from 'react'
 
 function Course({course3,DeleteCourse}) {

  

console.log(course3.id)

  
   return (
    
     <div>
      <div>
        <h2 className='title'>{course3.title}</h2>
        <h4 className='price'>{course3.price} TL</h4>
      </div>
      <div>
        <button onClick={()=>DeleteCourse(course3.id)}>SiL</button>
      </div>
     </div>
   )
 }
 
 export default Course