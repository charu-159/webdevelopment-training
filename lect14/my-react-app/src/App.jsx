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


// import React, { useState } from 'react'

// const App = () => {
//   let [input, setInput] = useState("")
//   let [show, setShow] = useState("")

//   function fun1(e) {
//     setInput(e.target.value)
//     console.log(e.target.value) // logs latest value
//   }

//   function fun2() {
//     setShow(input) // correct syntax
//   }

//   return (
//     <div>
//       <h2>{show}</h2> {/* show only after button click */}
//       <input 
//         type="text" 
//         name="input" 
//         value={input} 
//         placeholder="Enter your name" 
//         onChange={fun1} 
//       />
//       <button onClick={fun2}>Click</button>
//     </div>
//   )
// }

// export default App


// import React from "react";
// import Form from "./Form";
// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <Form />
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import Home from "./Home"

// //main-> app-> A-> b-> C



// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App



//userlist -dynamic routing 

import React from 'react'
import UserList from "./UserList"
import { Route, Routes } from "react-router-dom"
import UserProfile from "./UserProfile"

const App = () => {
  return (
    <div>
     {/* http://localhost:5173/profile/0 */}
      <Routes>
        <Route   path="/"   element={ <UserList/>}/>
        <Route   path="/profile/:id"   element={ <UserProfile/>}/>

      </Routes>
    </div>
  )
}

export default App