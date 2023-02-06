

import { useEffect, useState } from "react";
import axios from "axios";
import IntroPage from "./components/IntroPage";
import InformationSection from './components/InformationSection';
import PrereqsButton from "./components/PrereqsButtons";
import CourseBox from "./components/CourseBox";



function App() {


  const [selectedRegion, setRegionSelected] = useState(false);
  const [selectedPath, setSelectedPath] = useState(0);
  const [selectedCountry, setCountry] = useState("");
  const [webState, setWebState] = useState(0);
  const [credsSelected, setCredsSelected] = useState(false);
  

  const [region, setRegion] = useState("");
  const [prereqs, setPrereqs] = useState(0);

  const [tookHighMath, setHighMath] = useState(false);
  const [tookHighScience, setHighScience] = useState(false);
  const [tookPhysics, setPhysics] = useState(false);
  const [tookChemistry, setChemistry] = useState(false);

  const [courses, setCourses] = useState([]);


  const loadCoursesFromAPI =  () => {

    axios
      .get('https://pathwaysedu-backendapi-production.up.railway.app/api/courses?prereq=' +prereqs + '&region='+region)
      .then((response) => {
        if (response.status == 200) {

          const coursesData = response.data;
          setCourses(coursesData);

          console.log("Made Search with " + region + " and with a credits integer of: " + prereqs);
          console.log('https://pathwaysedu-backendapi-production.up.railway.app/api/courses?prereq=' +prereqs + '&region='+region)
          console.log(response);
        }

      })
      .catch((error) => {
      })
     
  }

  useEffect(()=>{
    console.log("Promise is being made")
    loadCoursesFromAPI();
  },[])

  
  
  return (
    <html>
      <head>
        <script src="https://kit.fontawesome.com/7302fb4d2e.js" crossorigin="anonymous"></script>
      </head>
      <div>
      <IntroPage/>
      <InformationSection
      selectedPath = {selectedPath}
      setSelectedPath = {setSelectedPath}
      selectedCountry = {selectedCountry}
      setCountry = {setCountry}
      selectedRegion ={selectedRegion}
      setRegionSelected = {setRegionSelected}/>
    {
      selectedPath >= 2 &&
      <PrereqsButton
      prereqs={prereqs}
      setPrereqs={setPrereqs}
      tookHighMath={tookHighMath}
      setHighMath={setHighMath}
      tookHighScience={tookHighScience}
      setHighScience={setHighScience}
      tookChemistry={tookChemistry}
      setChemistry={setChemistry}
      tookPhysics={tookPhysics}
      setPhysics={setPhysics}
      selectedPath={selectedPath}
      setSelectedPath={setSelectedPath}
      credsSelected={credsSelected}
      setCredsSelected={setCredsSelected}
      loadCoursesFromAPI={loadCoursesFromAPI}
      />
    }
    {
      selectedPath >= 3 &&
      <CourseBox
      courses={courses}/>
    }
      
  </div>

  </html>

  );
}

export default App;
