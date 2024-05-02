import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const Error = useRouteError();
    console.log(Error);
    
  return (
    <div>{Error.status} : {Error.statusText}</div>
  )
}

export default Error