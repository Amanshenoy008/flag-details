import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'



function Home() {

    const [error , seterror] = useState(null)
    const [loading , setloading ] = useState(true)
    const [flag, setflag] = useState("")
    const [ivalue , setivalue] =useState()

    const [url,seturl] = useState('https://restcountries.com/v3.1/all')

    const search = ()=>{
        seturl('https://restcountries.com/v3.1/name/'+ivalue)

    }

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setflag(data)
            setloading(false)
            seterror(false)
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
            setloading(false)
            seterror(err)
        
        })
    },[url])



    const africa =()=>{
        seturl('https://restcountries.com/v3.1/region/africa')
    }
    const america =()=>{
        seturl('https://restcountries.com/v3.1/region/america')
    }
    const asia = ()=>{
        seturl('https://restcountries.com/v3.1/region/asia')
    }
    const europe =()=>{
        seturl('https://restcountries.com/v3.1/region/europe')
    }

    const oceania =()=>{
        seturl('https://restcountries.com/v3.1/region/oceania')
    }
    const f=()=>{
        seturl('https://restcountries.com/v3.1/all')
    }

  return (
    <div className='home'> 
        
        <div className="filter">
            <input placeholder="Search for a country..." onChange={(e)=>{setivalue(e.target.value)} } className='inp'/>
            <button onClick={search}> Search</button>
            <div className="cont1">

                <div className="f1" onClick={f}> Filter by region</div>
                <div className="drop-content">
                <div className="f2" onClick={africa}> Africa</div>
                <div className="f3" onClick={america}> America</div>
                <div className="f4" onClick={asia}> Asia</div>
                <div className="f5" onClick={europe}> Europe</div>
                <div className="f6" onClick={oceania}> Oceania</div>
                </div>


            </div>

        </div>
        
        <div className="f-main-boxes">
        { error && <div className='error'>{ error }</div> }
        { loading && <div className='load'>Loading...</div> }
            {flag &&
                
                flag.map((flags)=>(
                    <Link to={'/flagdetails/'+flags["name"]["official"]} >

                    <div className='flag-side' key={flags["name"]["official"]}>
                        <img src={flags["flags"]["svg"]} alt="image" className="f-images-sub" />
                        <p className='Head'>{flags["name"]["official"]}</p>
                        <p >{"Population: "+flags["population"]}</p>
                        <p >{"Capital: "+ flags["name"]["1"]}</p>
                        <p>{"Region: "+flags["region"]}</p>
                        </div>
                        </Link>
                    )) 
                
            
            }

            
        </div>
        



    </div>
  )
}

export default Home