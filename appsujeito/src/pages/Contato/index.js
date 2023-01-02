import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div >
        <h1>Pagina contato</h1>
        <span>Contato da empresa (dd) xxxxx-xxxx </span> <br /><br />

        <Link to="/sobre">Sobre</Link> <br /><br />
        <Link to="/">Home</Link> 
      </div>
    );
  }
  
  export default Contato;