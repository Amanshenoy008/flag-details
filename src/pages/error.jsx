import React from 'react'
import { Link } from 'react-router-dom'
import { redirect } from "react-router-dom";


function Error() {

  const wp = ()=>{
    
  }
  return (
    <>
    <div className="c-e">
       <p className="txt-e" >
         Error 404 :- <br />
        Page not found
        
        </p>
        <Link To={'/'}><p>Click here</p></Link>
    </div>
    
    </>
  )
}

export default Error