import Header from "./Header";
import axios from "axios";
import { useState } from "react";

const NewBeer = () => {

const [send,setSend] = useState({name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""})

const sendData = (e) => {
    e.preventDefault();
 axios.post('https://ih-beers-api2.herokuapp.com/beers/new',send) 
 .then(response => console.log(response)) 
 .catch(err => console.log(err))   
}

const changeObject= (e) => {
    setSend((send) => ({...send,  [e.target.name]: e.target.value}))
}
console.log(send)
  return (
    <>
      <Header />
      <form>
        <label>
          <span>Nom</span>
          <input type="text" name="name" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>Tagline</span>
          <input type="text" name="tagline" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>Description</span>
          <input type="text" name="description" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>First Brewed</span>
          <input type="text" name="first_brewed" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>Brewers Tips</span>
          <input type="text" name="brewers_tips" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>Attenuation Level</span>
          <input type="number" name="attenuation_level" onChange={(e)=> changeObject(e)}/>
        </label>
        <label>
          <span>Contributed by</span>
          <input type="text" name="contributed_by" onChange={(e)=> changeObject(e)}/>
        </label>
        <input className="AddNew" type="submit" value="Add New" onClick={(e)=> sendData(e) }/>
      </form>
    </>
  );
};

export default NewBeer;
