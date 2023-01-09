import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import axios from "axios"
import BeerLoading from "../assets/BeerLoading.png"

const AllBeers = () => {

    const [beers,setBeers] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchData = async () => {
        try{
         const callData = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
         console.log(callData.data)
         setBeers(callData.data)
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
        {loading ? beers.map((element,index)=>
        <div key={index} className="beerCard">
            <img src={element.image_url} width={"70px"} alt="beerPicure"/>
            <div>
            <Link to={`/beers/${element._id}`} state={{element}} style={{color : "black", textDecoration : "none"}}><h1>{element.name}</h1></Link>
            <h2 style={{color : "grey", fontWeight : "400"}}>{element.tagline}</h2>
            <p><span>Created by :</span> {element.contributed_by}</p>
            </div>

        </div>)
        :
        <>
            <img src={BeerLoading} width={"400px"} className="beerLoading" alt="beerLoading"/>
        </>
        }
        </>
    )
}

export default AllBeers