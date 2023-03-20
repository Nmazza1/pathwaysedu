

import { useEffect, useState } from "react";
import axios from "axios";
import IntroPage from "./components/IntroPage";
import InformationSection from './components/InformationSection';
import PrereqsButton from "./components/PrereqsButtons";
import CourseBox from "./components/CourseBox";



function App() {

  const [selectedPath, setSelectedPath] = useState(0);
  const [selectedCountry, setCountry] = useState("");
  const [college, setCollege] = useState(0);
  const [credsSelected, setCredsSelected] = useState(false);
  const [district, setDistrict] = useState=("");
  
/*
  const [region, setRegion] = useState("");
  const [prereqs, setPrereqs] = useState(0);

  const [tookHighMath, setHighMath] = useState(false);
  const [tookHighScience, setHighScience] = useState(false);
  const [tookPhysics, setPhysics] = useState(false);
  const [tookChemistry, setChemistry] = useState(false);

  const [courses, setCourses] = useState([]);
*/
/*
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
  */
  return (
    <>
    <div>
    <IntroPage/>
    <InformationSection
    selectedPath = {selectedPath}
    setSelectedPath = {setSelectedPath}
    selectedCountry = {selectedCountry}
    setCountry = {setCountry}
    setCollege={setCollege}
    />
  {/*
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
    />*/
  }
  {/*
    selectedPath >= 3 &&
    <CourseBox
    courses={courses}/>
    */
  }
    
</div>
</>
  );
}

export default App;
