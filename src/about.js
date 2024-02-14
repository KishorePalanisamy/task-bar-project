import './App.css';
import axios from 'axios';
import React,{useState} from 'react';

function App(){
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data={
      name:name,
      place:place
    }
    console.log(data);
    axios.post("http://localhost:5001/post",data)
    .then(()=>{
      console.log("data successfully submitted");
    })
    .catch((error)=>{
      console.log(error);
    })
    console.log("DATA TRANSMISTTED SUCCESSFULLY");
  }
  const [name,setName] = useState("");
  const [place,setPlace] = useState("");

//   console.log(name);
//   console.log(place);

return(
  <div className='App'>
    <form onSubmit={handleSubmit}>
      <label>NAME:</label>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      <br></br>

      <label>PLACE:</label>
        <input type="text" onChange={(e)=>{setPlace(e.target.value)}}/>
        <br></br>

      <label>SUBMIT:</label>
        <input type="submit"/>

    </form>
    </div>
  )
}
export default App;