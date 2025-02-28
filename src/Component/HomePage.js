import { Link } from "react-router-dom";
import Allbeers from "../assets/beers.png";
import RandamBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";


const HomePage = () => {
  return (
    <>
      <img src={Allbeers} width={"100%"} alt="allBeers" />
      <Link to="/beers" style={{color : "black", textDecoration : "none"}}>
        <h1 style={{fontWeight : "400"}}>All Beers</h1>
      </Link>
      <p style={{color : "grey"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img src={RandamBeer} width={"100%"} alt="randomBeers" />
      <Link to="/random-beer" style={{color : "black", textDecoration : "none"}}>
        <h1 style={{fontWeight : "400"}}>Random Beers</h1>
      </Link>
      <p style={{color : "grey"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img src={NewBeer} width={"100%"} alt="allBeers" />
      <Link to="/new-beer" style={{color : "black", textDecoration : "none"}}>
        <h1 style={{fontWeight : "400"}}>New Beers</h1>
      </Link>
      <p style={{color : "grey"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};

export default HomePage;
