import React from 'react'

const home = () => {
  return (
    <div>home</div>
  )
}
const home= ({data}) => {
    console.log(data);
    return (
        <div>Home<h1>happy {data}</h1></div>
    )
}

export default home