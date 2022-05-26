import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './App.css';

function App() {
  const [authorName, setAuthorName] = useState("");
  const [authorlist, setAuthorList] = useState([])
  useEffect(() => {
   Axios.get('http://localhost:5000/api/authors').then((response)=> {
     setAuthorList(response.data);
   })
  }, [])

  const addToList = () => {
    Axios.post("http://localhost:5000/api/authors", {
    text: authorName,
    });
  };
  return (
    <div className="App">
      <h1>Add Author</h1>
      <label>Author Name:</label>
      <input type ="text" onChange={(event) => {setAuthorName(event.target.value);}}/>
      <button onClick={addToList}>Add to list</button>
      <h1>The List</h1>
      {authorlist.map((val, key) =>{
        return <div key={key}>
          <h2>{val.text}</h2><h2>{val._id}</h2>
          <button>Delete</button>
          </div>
      })}
    </div>
    
  );
}

export default App;
