import {useState , useEffect} from 'react'
import { Link , useParams} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

function Flagdetails() {

    const {id} = useParams()
    const [error , seterror]= useState(false)
    const [loading , setloading] = useState(true)
    const [fdetail , setfdetail] = useState("")

useEffect(()=>{
fetch('https://restcountries.com/v3.1/name/'+id)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setfdetail(data)
    seterror(false)
    setloading(false)
})
.catch(err=>{
    console.log(err)
    seterror(true)
    setloading(false)
})
},[id])


  return (
    <div>

        <div className='back-button'>
            <Link to={'/'} >
                <button className='btn1'> <BsArrowLeft />Back</button>
                </Link>
        </div>
        { error && <div> {error}</div>}
        { loading && <div>Loading.... </div>}
        { fdetail && 
        
            fdetail.map((detail)=>(
                <div className='flag-detail-main'>
                    <img src={detail["flags"]["png"]} className="img-main" alt="Not displayable"  />
                    <p>{detail["name"]["official"]}</p>
                    <p>{"Native name: "+ detail["name"]["nativeName"]}</p>
                    <p>{"population: "+ detail["population"]}</p>
                    <p>{"Region: "+ detail["region"]}</p>
                    <p>{"Sub Region: "+ detail["subregion"]}</p>
                    <p>{"Capital: "+ detail["capital"]}</p>
                    <p>{"Top level domain: "+detail["tld"]}</p>
                    <p>{"Currencies: "+detail["currencies"]}</p>
                    <p>{"Languages: "+detail["languages"]}</p>
                    
                </div>
            ))
        
        
        }



    </div>
  )
}

export default Flagdetails