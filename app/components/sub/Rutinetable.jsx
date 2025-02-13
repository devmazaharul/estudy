import { site_info } from '@/utils/Info'
import Rutineprint from './Rutineprint'

export default function Rutinetable({}) {

  const newCalssobj=site_info.rutine.find((item)=>{
    return item.className==6
  })



  const colSpan=newCalssobj && newCalssobj.rutine.map((a)=>a.books)


  return (
    <div className='overflow-x-auto'>
      <table className="md:w-[95%] w-full shadow-md  my-6 mx-auto capitalize    ">
        <thead>
          <tr className="bg-gray-700  text-center text-white">
            <td className="p-3 border-r rounded-tl-xl border-r-gray-500 ">Day</td>
            <td colSpan={colSpan[0].length} className="rounded-tr-xl ">Subjects & teachers name</td>
          </tr>
        </thead>
        <tbody>
          {newCalssobj.rutine.map((item)=>(
            <tr className='rounded-xl' key={Math.random()}>
              <td className=" border text-center border-r-gray-300">{item.dayName}</td>
              {
              item.books.sort((a,b)=>{
                if(a.time>b.time){
                  return 1
                }else if(a.time<b.time){
                  return -1
                }else{
                  return 0
                }
              }).map((book)=>(
                <td key={Math.random()} className="border  border-r-gray-300 capitalize text-center">
                <div className='flex items-center gap-1 w-fit mx-auto'>
                <p className='bg-purple-100 w-fit rounded-md mx-auto p-1 m-1 text-purple-600'> {book.name}</p>
                <p >-</p>
                <p className={` bg-green-100 w-fit rounded-md mx-auto p-1 m-1 text-green-600 `}> {book.time}</p>
                </div>
               

                <div className='flex items-center  w-fit  mx-auto'>
                <p className=' text-gray-700 rounded-md m-1'> {book.teacher_name} </p><small><i>(Teacher)</i></small>
              
                </div>
              </td>
              ))
              
              
              }
            </tr>
          ))}
         
        </tbody>
      </table>
<Rutineprint/>
     
    </div>
  )
}
