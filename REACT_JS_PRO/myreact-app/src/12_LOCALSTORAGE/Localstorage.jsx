import { useEffect, useState } from 'react'

import { Button, Input, Table } from 'reactstrap'
// Make ToDo list
export default function LocalstorageCRUD() {
    /*  style part start  */
        let mydivStyle={
            backgroundColor : "teal",
            color:"white",
            marginLeft:"180px",
            marginRight:"180px",
            padding:"20px",
        }
        let buttonStyle = {color:"white",backgroundColor:"blue",width:"100%"}
    /*  style part end  */

    /* state management */
        let [inputvalue,setInputValue] = useState()
        let [pendingTask,setPendingTask] = useState([])
        let [indexUpdate,setIndexUpdate] = useState(null);
        
    /* state management */

    useEffect(()=>{
        console.log("on page refresh");
        let jsonData = localStorage.getItem("myTask");
        console.log("====>> jsonData",jsonData);
        let normalData = JSON.parse(jsonData) || []; // bcs first time it will return blank array 
        setPendingTask(normalData);
    },[])


    // useEffect(()=>{
    //     console.log("---> it will call when pendingTask update ");
    //     localStorage.setItem("myTask",JSON.stringify(pendingTask));
    // },[pendingTask])

    const addHandler=()=>{
        // get value from input and store it in pendingTask
        console.log("blank entry ",inputvalue);
        // console.log("length = ",inputvalue.length);
        if(inputvalue === undefined || inputvalue.length === 0) 
        {
            alert("Invalid Input Must required field")
        }
        else
        {
            const includesValue = pendingTask.some(e => {
                return e.toLowerCase()  === inputvalue.toLowerCase();
            })
            if(includesValue)
            {
                alert("Already Exist")
            }
            else
            {
                setPendingTask([...pendingTask,inputvalue])
                // localstorage set
                localStorage.setItem("myTask",JSON.stringify([...pendingTask,inputvalue]))
                setInputValue("")
            }

        }
        
    }

    const deleteData=(index)=>{
        // console.log("---->>> deleteData ");
        // console.log(index);
        let filteredArray = pendingTask.filter((e,i)=> i!==index)
        setPendingTask(filteredArray)  // replace with filteredArray with existed one 
        localStorage.setItem("myTask",JSON.stringify(filteredArray))
    }
    const editHandler =(e,i) =>{  
        // for data fetch from the list and set in input box 
        setInputValue(e)
        // set that select value's index in state so, we can access it from updateHandler
        setIndexUpdate(i)
    }
    
    const updateHandler =()=>{
        // here, pendingTask which is contain our main Array 
        // splice accept 3 arguments (startingindex , numberofindex , updatedvalue)
            // console.log("---->>> index value ",indexUpdate);
            // console.log("---->>> updated value ",inputvalue);

        // below condition check that indexupdate not be null or false or undefined or zero 
        if(indexUpdate || indexUpdate === 0)
        {
            pendingTask.splice(indexUpdate,1,inputvalue);

            // now, need to replace with array 
            setPendingTask([...pendingTask]);
            localStorage.setItem("myTask",JSON.stringify(pendingTask))
            //console.log("--->> All Task",pendingTask);

            // now, clear input box 
            setInputValue("")

            // now need to clear index value otherwise whenever we press update button it will change 
            setIndexUpdate(null)
        }
        
    }
    
    return (
        <div style={mydivStyle}>
            <h1>My ToDo</h1> 
            <br></br>
            <Input onChange={(v)=>setInputValue(v.target.value)} placeholder='Enter Your Todo Note ' value={inputvalue || ""} /> 
            
            <br></br>
            {indexUpdate || indexUpdate===0 
                ?
                    <Button style={buttonStyle} onClick={()=>updateHandler()}>Update</Button>
                :
                    <Button style={buttonStyle} onClick={()=> addHandler()}>Submit</Button>
            }
                       
            <Table hover responsive striped dark style={{color:"white"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingTask.map((e,i)=>{
                            return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{e}</td>
                                    <td>
                                        <Button onClick={()=>editHandler(e,i)} style={{backgroundColor:"purple"}}>Edit</Button>
                                        {" "} {" "}
                                        <Button onClick={()=>deleteData(i)} style={{backgroundColor:"red"}}>Delete</Button>

                                    </td>
                                </tr>
                            );
                        })
                    }
                   
                </tbody>
                </Table>
        </div>
    )
}