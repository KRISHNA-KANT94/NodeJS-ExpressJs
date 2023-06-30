import { useState } from "react"
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const EmployeeForm=()=>{

        const[empid,setempid]=useState('')
        const[ename,setname]=useState('')
        const[esal,setsal]=useState('')
        const navigate=useNavigate()



        const handleSubmit=()=>{
            axios.post(`http://localhost:3305/employee`,{
                empid:empid,
                ename:ename,
                esal:esal
            }).then(()=>{navigate('/employeetable')})
        }

        




    return(

        <>
        Employee ID: <input type="text" name="eid" id="eid" value={empid} onChange={(e)=>setempid(e.target.value)}></input><br></br>
        Employee Name: <input type="text" name="nm" id="nm" value={ename} onChange={(e)=>setname(e.target.value)}></input><br></br>
        Employee Sal: <input type="text" name="sl" id="sl" value={esal} onChange={(e)=>setsal(e.target.value)}></input><br></br>
        <button type="button" onClick={handleSubmit}>AddEmployee</button>
        </>
    )
}

export default EmployeeForm