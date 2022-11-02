import {useState} from 'react'


function Navbar() {

 /* const mystyle ={
    backgroundColor:"hsl(207, 26%, 17%)",

  }*/

  const [mode,setmode] = useState('light')

  const chng = ()=>{
    
    if(mode==='light')
    setmode('dark')
    else
    setmode('light')

    console.log(mode)
  }


  return (
    <nav className="navbars" >
        <h3>Where is the world?</h3>
        <div onClick={chng} className="dm" >
            Dark mode
        </div>
    </nav>
  )
}

export default Navbar