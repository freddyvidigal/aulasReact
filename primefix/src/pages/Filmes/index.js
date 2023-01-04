import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './../../services/api';
import './filmes.css';
import { toast } from 'react-toastify';



function Filmes(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const[loading, setLoading] = useState(true);
    

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "0e2fac409db2f56fa91952eb5c205160",
                    language: "pt-BR",

                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('FILME NAO ENCONTRADO')
                navigate("*", {replace:true});
                return;
            })
        }
        loadFilme();


       return()=>{
        console.log("desmontando")
       } 
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvo)=> filmesSalvo.id === filme.id )

        if(hasFilme){
            toast.warn("Este filme ja possui na sua lista")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
       toast.success("filme salvo com sucesso")


    }

    if(loading){
        return(
            <div className='filme-info'>
            <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info' >
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <Link to='/'>Voltar para Home</Link>
             <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="__blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
            </button>
            
        </div>
        </div>
       
    )
}

export default Filmes;
