// import React, { useMemo } from 'react'
// import {useCounter} from './useCounter'
// const App = () => {

//   let {count,inc,dec,reset}  =useCounter(0)
//   console.log("hi");
//   let total=useMemo(()=>{
//   let res=0;
//   //function call(){
//     for (let i=0;i<1000000000;i++){
//       res+=1;
//     }
//     return res;
//   },[])
//   let total=cal();
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={inc}>++</button>
//         <button onClick={dec}>--</button>
//           <button onClick={reset}>reset</button>
//    </div>
//   )
// }

// export default App


import {memo,useState} from 'react'

const App = () => {
  let [count,SetCount]=  useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>SetCount(count+1)}>Add</button>
      <M/>
    </div>
  )
}
const M=memo(function(){
  console.log("hello");
  return(<></>)
})

export default App