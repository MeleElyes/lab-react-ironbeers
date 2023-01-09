import { useLocation } from "react-router-dom"
import Header from "./Header"

const BeersDetails = () => {
    let location = useLocation()
    const myData = location.state.element
    return(
        <>
        <Header />
        <div className="beerDetails">
        <img src={myData.image_url} width={"100px"} alt="beerImg" />
        <div className="titleBeerDetails">
        <div>
        <h1>Beer's name : {myData.name}</h1>
        <h2 style={{color : "grey", fontWeight : "400"}}>{myData.tagline}</h2>
        </div>
        
        <div>
            <p>Attenuation Level : {myData.attenuation_level}</p>
            <p>First Brewed : {myData.first_brewed}</p>
        </div>
        </div>
        <div className="beersDescription">
            <h4>Description</h4>
            <p>{myData.description}</p>
            <p>{myData.contributed_by}</p>
        </div>
       
        </div>
        </>
    )
}

export default BeersDetails