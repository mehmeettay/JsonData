import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Courses from './Courses';




function App() {
const [courses, setCourses] = useState([]) // bu useState i de cektigimiz veriyi icine atmak icin aciyoruz

const DeleteCourse3 = (id)=> {

  // Bu fonksiyonun amaci en basta cektigimiz courses lari tutan courses variableina 
  //silinen courseslari tekrardan yollamak.
  const AfterDeletedCourses = courses.filter((course)=>course.id !==id)
  setCourses(AfterDeletedCourses);

}

const fetchCourse = async () => {
  
  const response = await axios.get('http://localhost:3000/courses'); 
  setCourses(response.data);
  debugger;
  
}; //fetchCourse ile olusturdugumuz json serverinden veri cekiyoruz

  useEffect(()=>{
   fetchCourse();
  },[]);
  return (
    <div className="App">
      <Courses courses1={courses} DeleteCourse2={DeleteCourse3}/>
    </div>
  );
}

export default App;
