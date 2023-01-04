import './heder.css';
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header>
            <Link className='logo' to="/">Prime flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
        </header>
    )
}

export default Header;