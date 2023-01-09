import Home from "../assets/Home.png"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div className="Header">
        <header style={{backgroundColor : "#78CEFF", padding : "1%"}}>
        <Link to="/"><img src={Home} width={"60px"} alt="home"/></Link>
        </header>
        </div>
    )
}

export default Header