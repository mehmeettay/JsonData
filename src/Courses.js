import React from 'react'
import Course from './Course'

function Courses( {courses1,DeleteCourse2} ) {
    
  return (
    <div className='maindiv'>
      <div>
        <h2 className='kurslarim'>Kurslarim</h2>
      </div>
      <div className='genel'>
    {
      courses1.map((course2)=>{

        return(

          <Course key={course2.id} course3={course2} DeleteCourse={DeleteCourse2}/>
          //<Course course3={course2}/>
        )
      })
    }
      </div>
    </div>
  )
}

export default Courses