import Cabecalho from "../components/cabecalho/Cabecalho";
import Card from "../components/card/Card";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();


    const cardpage = () => {
        navigate('/cardpage');
    };

    const cardmaker = () => {
        navigate('/cardmaker');
    };
    
    


    return(
        <> 
        <Cabecalho> </Cabecalho>
        
        <button onClick={cardpage}> Go to Card Page </button>
        <button onClick={cardmaker}> make new cards </button>
        
        
        
        
        
        </> 


    );
    


}

export default Homepage;