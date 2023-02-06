function PrereqsButton({tookHighMath, setHighMath, tookHighScience, setHighScience, tookChemistry, setChemistry, tookPhysics, setPhysics,
prereqs, setPrereqs,setSelectedPath, credsSelected, setCredsSelected, loadCoursesFromAPI}){
    return(
        <div className="font-serif text-center text-2xl pb-12">

          <p className="text-center text-black font-serif">Choose Your Prerequisites!</p>
            <div className="flex text-center gap-4 mx-4 py-4">
                <div className={tookHighMath ? "rounded-lg border-4 p-8 w-1/4 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500 w-1/4"} onClick={()=>{
                    setHighMath(!tookHighMath)
                    if(tookHighMath)
                    setPrereqs(prereqs-8)
                    else
                    setPrereqs(prereqs+8)
                    }}>
                    <p>High Math</p>
                </div>

                <div className={tookHighScience ? "rounded-lg border-4 p-8 w-1/4 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500 w-1/4" } onClick={()=>{setHighScience(!tookHighScience)
                    if(tookHighScience)
                    setPrereqs(prereqs-4)
                    else
                    setPrereqs(prereqs+4)
                 }}>
                    <p>High Science</p>
                </div>

                <div className={tookChemistry ? "rounded-lg border-4 p-8 w-1/4 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500 w-1/4" } onClick={()=>{setChemistry(!tookChemistry)
                    if(tookChemistry)
                    setPrereqs(prereqs-2)
                    else
                    setPrereqs(prereqs+2)}}>
                    <p>Chemistry</p>
                </div>

                <div className={tookPhysics ? "rounded-lg border-4 p-8 w-1/4 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500 w-1/4"} onClick={()=>{setPhysics(!tookPhysics)
                    if(tookPhysics)
                    setPrereqs(prereqs-1)
                    else
                    setPrereqs(prereqs+1)}}>
                    <p>Physics</p>
                </div>
            </div>

           
        </div>
    )
}

export default PrereqsButton;