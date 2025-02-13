// import Cabecalho from "../components/cabecalho/Cabecalho";
// import Card from "../components/card/Card";

// const Cardpage = () => {

//     return(
//         <> 
//         <Cabecalho> </Cabecalho>
//         <Card> </Card>
        
        

        
        
        
        
//         </> 


//     );
    
// }

// export default Cardpage;



import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Cabecalho from "../components/cabecalho/Cabecalho";
import Card from "../components/card/Card";

const Cardpage = () => {
    const location = useLocation(); // Get the location object from React Router
    const { cardText } = location.state || {}; // Get cardText from passed state

    return (
        <>
            <Cabecalho />
            {/* Ensure cardText is available and pass to Card */}
            {cardText && <Card text={cardText} />}
        </>
    );
}

export default Cardpage;
