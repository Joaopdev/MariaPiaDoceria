import { Link } from 'react-router-dom';

export const PaginaInicial = () => {
    return (
        <div>
            <h1> Olá, mundo! </h1>
            <p>Página inicial</p>
            <Link to="/login"> Login </Link>
        </div>
    )
}