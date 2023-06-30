import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const EmployeeTable=()=>{


        const[emp,setemp]=useState([])



    const deleteemp=async(id)=>{
       
        try {
            await axios.delete(`http://localhost:3305/employee/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const getEmployee=async()=>{

        try {
            const {data} =await axios.get(`http://localhost:3305/employee`)
            setemp(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect=()=>{
    //     getEmployee();
    // }

    useEffect(()=>{
        getEmployee();
    })



    return(
        <>
        <Link to="/"><button>AddEmployee</button></Link>
        <table border="2">
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>EmployeeName</th>
                    <th>EmployeeSal</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((e)=>{
                        return(
                            <>
                            <tr>
                                <td>{e.empid}</td>
                                <td>{e.ename}</td>
                                <td>{e.esal}</td>
                                <td><button onClick={()=>deleteemp(e.empid)}>Delete</button></td>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
        </>

    )
}
export default EmployeeTable