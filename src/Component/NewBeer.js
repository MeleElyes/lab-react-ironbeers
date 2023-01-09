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

const sendData = (event) => {
    event.preventDefault();
 axios.post('https://ih-beers-api2.herokuapp.com/beers/new',send) 
 .then(response => console.log(response)) 
 .catch(err => console.log(err))   
}
console.log(send)
  return (
    <>
      <Header />
      <form>
        <label>
          <span>Nom</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, name : event.target.value})}/>
        </label>
        <label>
          <span>Tagline</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, tagline : event.target.value})}/>
        </label>
        <label>
          <span>Description</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, description : event.target.value})}/>
        </label>
        <label>
          <span>First Brewed</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, first_brewed : event.target.value})}/>
        </label>
        <label>
          <span>Brewers Tips</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, brewers_tips : event.target.value})}/>
        </label>
        <label>
          <span>Attenuation Level</span>
          <input type="number" name="name" onChange={(event)=> setSend({...send, attenuation_level : event.target.value})}/>
        </label>
        <label>
          <span>Contributed by</span>
          <input type="text" name="name" onChange={(event)=> setSend({...send, contributed_by : event.target.value})}/>
        </label>
        <input className="AddNew" type="submit" value="Add New" onClick={(event)=> sendData(event) }/>
      </form>
    </>
  );
};

export default NewBeer;
