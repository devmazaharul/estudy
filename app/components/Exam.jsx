import { site_info } from "@/utils/Info";
import SingleExam from "./sub/SingleExam";

export default function Exam() {
  return (
    <div className="section">
     <div className="section_head">
        <h1 className="section_head_title">Upcomming exams</h1>
        <p className="section_head_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita a dicta delectus architecto debitis.</p>
     </div>

     {/* exmas componexts */}

     <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
        {site_info.exams.map((exam,i)=>(
            <SingleExam key={i} {...exam}/>
        ))}
     </div>



    </div>
  )
}
