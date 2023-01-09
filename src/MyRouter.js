import {Routes,Route} from "react-router-dom"
import HomePage from "./Component/HomePage"
import AllBeers from "./Component/AllBeers"
import BeersDetails from "./Component/BeersDetails"
import RandomBeers from "./Component/RandomBeers"
import NewBeer from "./Component/NewBeer"
import './App.css'


const Router = () => {
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/beers" element={<AllBeers />}/>
                <Route path="/beers/:beersId" element={<BeersDetails />}/>
                <Route path="/random-beer" element={<RandomBeers />}/>
                <Route path="/new-beer" element={<NewBeer />}/>
            </Routes>
        </div>
    )
}

export default Router