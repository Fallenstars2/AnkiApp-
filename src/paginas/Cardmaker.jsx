import Cabecalho from "../components/cabecalho/Cabecalho";
import Card from "../components/card/Card";
import './cardmaker.css';
import React, { useState } from "react";


const Cardmaker = () => {



     // Step 1: Create a state to store the value of the textarea
     const [cardText, setCardText] = useState("");

     // Step 2: Handle input change
     const handleInputChange = (event) => {
         setCardText(event.target.value); // Update state with the textarea value
     };

    return(
        <> 
        <Cabecalho>  </Cabecalho>
        <button> test </button>
        <p> make new cards here </p>
        

        <textarea 
                className="cardinput" 
                value={cardText} 
                onChange={handleInputChange} 
            ></textarea>


      
        

        
        
        
        
        </> 


    );
    
}

export default Cardmaker;