import { useParams } from "react-router-dom";
function Produto(){

    const { id } = useParams();
    return(
        <div>
            <h2>O produto selecionado</h2><br /><br />
            <span>Meu Produto è {id}</span>
        </div>
    )
}

export default Produto;