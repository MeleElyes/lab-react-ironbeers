import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import BeerLoading from "../assets/BeerLoading.png"

const RandomBeers = () => {
    const [randombeers,setRandombeers] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchData = async () => {
        try{
         const callData = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
         console.log(callData.data)
         setRandombeers(callData.data)
         setLoading(true)
       }
         catch(err){console.log(err)}
       }
       
       useEffect(()=>{
         fetchData()
       },[]
       )


    return(
        <>
        <Header/>
        {loading ?
        <div className="beerDetails">
        <img src={randombeers.image_url} width={"100px"} alt="beerImg" />
        <div className="titleBeerDetails">
        <div>
        <h1>Beer's name : {randombeers.name}</h1>
        <h2 style={{color : "grey", fontWeight : "400"}}>{randombeers.tagline}</h2>
        </div>
        
        <div>
            <p>Attenuation Level : {randombeers.attenuation_level}</p>
            <p>First Brewed : {randombeers.first_brewed}</p>
        </div>
        </div>
        <div className="beersDescription">
            <h4>Description</h4>
            <p>{randombeers.description}</p>
            <p>{randombeers.contributed_by}</p>
        </div>
       
        </div> : 
        <img src={BeerLoading} width={"400px"} className="beerLoading" alt="beerLoading"/>
    }
        </>
    )
}

export default RandomBeers