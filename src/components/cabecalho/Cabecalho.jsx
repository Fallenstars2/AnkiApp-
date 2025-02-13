// import Avatar from "../Avatar/Avatar";
import Homepage from "../../paginas/homepage";
import "./Cabecalho.css";
import { useNavigate } from 'react-router-dom';

function Cabecalho() {

  const navigate = useNavigate();


  const Homepage = () => {
      navigate('/');
  };
  




  return (
    <header className="cabecalho_root">
      <img src="/public/vite.svg" height={40} />
      <button onClick={Homepage}> HOME </button>
     
    </header>
  );
}

export default Cabecalho;