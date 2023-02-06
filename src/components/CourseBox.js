import SchoolCard from "./SchoolCard";
function CourseBox({courses}){
    return(
        <div className="font-serif text-center text-2xl pb-12">
            <p>Here's what we found for you!</p>
            <div className="flex border rounded-lg border-4 m-8">
                     {courses.map((item)=>{
                        return <div className="mb-4"><SchoolCard
                        course = {item}/></div>
                    })}
            </div>
        </div>
    )
}

export default CourseBox;