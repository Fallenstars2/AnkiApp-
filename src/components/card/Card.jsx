// import ReactCardFlip from 'react-card-flip';
// import pfp from '../../assets/pfp.jpg';

// import { useState } from 'react';
// import Principal from '../principal/principal';
// import Cabecalho from '../cabecalho/Cabecalho';





// function Card(){
//     const [isFlipped, setIsFlipped] = useState(false);

//     function flipcard(){
//         setIsFlipped(!isFlipped);
//     }

//     return(

//         <Principal> 
            
//         <div> 
            
//         <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}> 

//         <div className="Card">

        
//         <img className="Pfp" src={pfp} alt="profilepic"/> 
//         <h2> testgwerg </h2>
        
//         <button className="cardflip" onClick={flipcard}> flip </button>

//         </div>

//         <div className="Card card-back"> 

        
//         <img className="Pfp" src={pfp} alt="profilepic"/> 

//         <div className='textarea'> 
//         <h2> Reki  </h2>
//         <p> Haibane </p>
//         </div>

//         <div className='bottompart'>

//         <button className="cardflip" onClick={flipcard}> flip </button>
//         <button className="cardflip" onClick={flipcard}> learned </button>
//         <button className="cardflip" onClick={flipcard}> study </button>

//         </div>

//         </div>

//         </ReactCardFlip>

//         </div>

//         </Principal>
//     );

// }

// export default Card


import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import pfp from '../../assets/pfp.jpg';
import Principal from '../principal/principal';

function Card({ text }) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipcard() {
        setIsFlipped(!isFlipped);
    }

    return(
        <Principal> 
            <div> 
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}> 

                    {/* Front of the card */}
                    <div className="Card">
                        <img className="Pfp" src={pfp} alt="profilepic"/> 
                        <h2> testgwerg </h2>  {/* Static name */}
                        <button className="cardflip" onClick={flipcard}>flip</button>
                    </div>

                    {/* Back of the card */}
                    <div className="Card card-back">
                        <img className="Pfp" src={pfp} alt="profilepic"/> 
                        <div className="textarea"> 
                            <h2> {text} </h2>  {/* Dynamic text from Cardmaker */}
                        </div>

                        <div className="bottompart">
                            <button className="cardflip" onClick={flipcard}>flip</button>
                            <button className="cardflip" onClick={flipcard}>learned</button>
                            <button className="cardflip" onClick={flipcard}>study</button>
                        </div>
                    </div>

                </ReactCardFlip>
            </div>
        </Principal>
    );
}

export default Card;
