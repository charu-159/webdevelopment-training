// import { useState } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);

//   function fun() {
//     setCount(count);
//   }

//   return (
//     <div>
//       <h2>{count}</h2>

//       <button onClick={fun}>addd</button>
//     </div>
//   );
// };

// // export default App;
// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let user="charu"
//   return (
//     <div><Home data={user}/>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'

const App = () => {
  let[input,setInput]=useState("")
  
  function fun1(e){
    // console.log(e.target.value)
    setInput(e.target.value)
    console.log(input)
  }
  return (
    <div>
      <h2>{input}</h2>
    <input type="text" name="input" value={input} placeholder="Enter your name" onChange={fun1}/>
    </div>
  )
}

export default App
