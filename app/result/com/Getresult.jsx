import Rutineprint from "@/app/components/sub/Rutineprint";

export default function Getresult(data) {
  const { name, roll, father_name, mother_name,institureName:school_name, date_birth:dob, registration,resultId } = data;
  const {subjects:resultsArr,class_name,exam_name}=resultId;
 

  function marksToGPA(marks) {
    if (marks >= 80) return 5.00;
    else if (marks >= 70) return 4.00;
    else if (marks >= 60) return 3.50;
    else if (marks >= 50) return 3.00;
    else if (marks >= 40) return 2.00;
    else if (marks >= 33) return 1.00;
    else return 0.00; // Fail
}

const calgpa=resultsArr.reduce((acc,curr)=>{
 
 if( resultsArr.some(val=>marksToGPA(val.mark)===0.00)){
    return 0.00;
   }

   return acc+marksToGPA(curr.mark)
},0)



const totalCgpa=(calgpa/resultsArr.length).toFixed(2)

 



  return (
    <div>
      <table className="md:w-[60%] w-full shadow-sm  my-6 mx-auto capitalize ">
        <thead>
          <tr className="bg-gray-700   border   text-center text-white">
           
            <td colSpan={4} className="text-center ">
            <div className="w-full">
                <p className="text-center py-2 text-gray-100 bg-slate-700 ">{exam_name} - Student information</p>
             </div>
            </td>
            
          </tr>
          <tr className="  text-center ">
            <td className= "border-dashed border text-gray-700  py-2 text-center">name</td>
            <td colSpan={3} className="text-center border-dashed border ">{name}  [<small>class-{class_name}</small>]</td>
            
          </tr>
          <tr className="  text-center ">
            <td className= "border-dashed border py-2 text-gray-700 text-center">Roll</td>
            <td colSpan={3}  className= "border-dashed border text-center">{roll}</td>
          </tr>
          <tr className="  text-center ">
            <td className= "border-dashed border py-2 text-gray-700 text-center">Registration</td>
            <td colSpan={3}  className= "border-dashed border text-center">{registration}</td>
          </tr>
       
          <tr className="  text-center ">
            <td className= "border-dashed border py-2 text-gray-700 text-center">
              Date of birth
            </td>
            <td colSpan={3} className= "border-dashed border text-center">{dob}</td>
          </tr>
          <tr className=" text-center ">
            <td className=" py-2  border-dashed border text-gray-700 text-center">
              Father name
            </td>
            <td colSpan={3} className="text-center border border-dashed">{father_name}</td>
          </tr>
          <tr className="text-center ">
            <td className=" py-2 text-center text-gray-700 border border-dashed">
              Mother name
            </td>
            <td colSpan={3} className="text-center border border-dashed">{mother_name}</td>
          </tr>
          <tr className="text-center ">
           
            <td className=" py-2 text-center text-gray-700 border border-dashed">Poient & Status</td>
            <td className="text-center border-dashed border">
              {totalCgpa} GPA
            </td>
            <td colSpan={3} className="text-center border border-dashed">
              {!totalCgpa.startsWith(0.00) ? (
                <p className="text-green-600">Pass</p>
              ) : (
                <p className="text-red-600">Fail</p>
              )}
            </td>
          </tr>
        </thead>

        <tbody>
            <tr className="w-full">
             <td colSpan={4} className="text-center  border-dashed border ">
             <div className=" w-full">
                <p className="text-center py-2 text-gray-100 bg-slate-700 ">Results information</p>
             </div>
             </td>
            </tr>
            <tr>
              
                <td className="text-center  border-dashed border py-2 text-gray-700"><b>Code</b></td>
                <td className="text-center  border-dashed border py-2 text-gray-700"><b>Subject</b></td>
                <td className="text-center  border-dashed border py-2 text-gray-700"><b>Mark</b></td>
                <td className="text-center  border-dashed border py-2 text-gray-700"><b>Poient</b></td>
        
            </tr>
            {
                resultsArr.map((result,i)=>(
                    <tr key={i}>
                        <td className="text-center  border-dashed border py-2">{result.code}</td>
                        <td className="text-center  border-dashed border ">{result.name}</td>
                        <td className="text-center  border-dashed border ">{result.mark}</td>
                        <td className="text-center  border-dashed border ">
                            {
                            result.mark >= 80?"5.00":result.mark>=70?"4.00":result.mark>=60?"3.50":result.mark>=50?"3.00":result.mark>=40?"2.00":result.mark>=33?"1.00":<p className="text-red-500">Fail</p>
                            }
                            </td>
                    </tr>
                ))
            }
          
            
        </tbody>
      </table>
      <div>
        <Rutineprint/>
      </div>


    </div>
  );
}
