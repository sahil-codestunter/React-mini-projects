import React, { useEffect, useState } from 'react'
function Github() {
    const [data,setdata]=useState({})
    useEffect(()=>{
      fetch('https://api.github.com/users/sahil-codestunter')
        .then(Response=> Response.json())
        .then(data=> {
            console.log(data);
            setdata(data)
    })
    },[])
  return (
    <div>Github followers : { data.followers}
    <img className='width-50px' src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github