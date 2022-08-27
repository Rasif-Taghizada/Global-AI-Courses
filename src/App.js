import React , {useEffect , useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header.jsx';
import Card from './Components/Cards/Card.jsx';

function App() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get("https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses")
      .then(response => setCourses(response.data))
  }, [])

  console.log(courses);

  return (
    <div className="App">
      <Header/>
      <Card props={courses}/>
    </div>
  );
}

export default App;
