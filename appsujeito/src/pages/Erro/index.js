import { Link } from "react-router-dom";
function Erro(params) {
   return(
    <div>
        <h2>Ops parece que esta pagina nao existe!</h2> <br /><br />

        <span>Encontamos essas paginas Aqui!</span><br /><br />
        <Link to="/sobre">Sobre</Link> <br /><br />
        <Link to="/contato">Contato</Link> <br /><br />
        <Link to="/">Home</Link> 
    </div>
   ) 
}

export default Erro;