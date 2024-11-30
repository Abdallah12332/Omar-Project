import React,{useState} from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/Form.css"
export const Form = () => {
 



const [inputValue,setInputValue] = useState({data:''});

function handleInputChange  (e){
  const {data,value} = e.target;
  setInputValue({...inputValue,data:value})
}

 async function  handleSubmit  (e){
  
 
  try{
    await axios.post('http://localhost:10000/send/data',{"data":inputValue.data},{
    headers: {
      'Content-Type': 'application/json',
      Accept:'application/json'
  },
   });
   console.log("Data sent successfully");
  }catch(err){
    console.error("Error details",err)
  }
  

}


  return (
    <>
    
    <form  className='form1' >
     <textarea className='text-area' value={inputValue.data}  onChange={ handleInputChange} id='t'  placeholder='write anything and please do not send useless messages like js;djf;aj;lfjsa;lfd;j' ></textarea><br></br>
     <button className='btn btn-success' onClick={handleSubmit} type="submit" style={{fontSize:40}} >Submit</button>
     <p>{inputValue.data}</p>
  </form>
    
    </>
  )
}
